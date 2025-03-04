#!/usr/bin/env node

// Script para configurar la base de datos de Ad Simulator
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Función para ejecutar el script SQL
async function setupDb() {
  console.log('🔥 Configurando base de datos para Ad Simulator...');
  
  // Crear una conexión a la base de datos
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

  try {
    // Conectar a la base de datos
    await client.connect();
    console.log('✅ Conectado a la base de datos PostgreSQL.');

    // Leer el archivo de esquema SQL
    const schemaPath = path.join(__dirname, '..', 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');

    // Ejecutar el esquema SQL
    await client.query(schemaSql);
    console.log('✅ Esquema SQL ejecutado correctamente.');

    // Verificar que la tabla waitlist fue creada
    const res = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'waitlist'
      );
    `);

    if (res.rows[0].exists) {
      console.log('✅ Tabla waitlist verificada.');
    } else {
      console.error('❌ La tabla waitlist no fue creada correctamente.');
      process.exit(1);
    }

    console.log('🎉 Base de datos configurada exitosamente!');
  } catch (err) {
    console.error('❌ Error al configurar la base de datos:', err);
    process.exit(1);
  } finally {
    // Cerrar la conexión
    await client.end();
  }
}

// Ejecutar la función principal
setupDb(); 