import { initWaitlistTable } from '@/lib/db';

export async function initializeDatabase() {
  try {
    console.log('Initializing database tables...');
    await initWaitlistTable();
    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database tables:', error);
  }
}

// Inicializamos la base de datos solo si estamos en el servidor
if (typeof window === 'undefined') {
  initializeDatabase();
} 