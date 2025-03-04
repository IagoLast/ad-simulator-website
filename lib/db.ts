import { Pool } from 'pg';

// Crea un pool de conexiones a PostgreSQL usando las variables de entorno
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Verifica la conexión
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('PostgreSQL connection error:', err);
});

// Inicializa la tabla waitlist si no existe
export async function initWaitlistTable() {
  const client = await pool.connect();
  try {
    // Crear la tabla waitlist si no existe
    await client.query(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Waitlist table initialized');
  } catch (error) {
    console.error('Error initializing waitlist table:', error);
  } finally {
    client.release();
  }
}

// Añade un email a la tabla waitlist
export async function addToWaitlist(email: string) {
  const client = await pool.connect();
  try {
    // Verificar si el email ya existe
    const checkResult = await client.query(
      'SELECT email FROM waitlist WHERE email = $1',
      [email]
    );

    if (checkResult && checkResult.rowCount && checkResult.rowCount > 0) {
      // El email ya existe
      return { success: true, message: 'Email ya registrado', isNew: false };
    }

    // Insertar el nuevo email
    await client.query(
      'INSERT INTO waitlist (email) VALUES ($1)',
      [email]
    );

    return { success: true, message: 'Email registrado correctamente', isNew: true };
  } catch (error) {
    console.error('Error adding email to waitlist:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Obtiene todos los emails de la tabla waitlist
export async function getAllWaitlistEmails() {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'SELECT email FROM waitlist ORDER BY created_at DESC'
    );
    return result.rows.map(row => row.email);
  } catch (error) {
    console.error('Error getting waitlist emails:', error);
    throw error;
  } finally {
    client.release();
  }
}

export default pool; 