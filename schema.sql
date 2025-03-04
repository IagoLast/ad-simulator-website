-- Esquema para la base de datos de Ad Simulator
-- Tabla para la lista de espera
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Índice para búsquedas rápidas por email
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Comentarios para la tabla
COMMENT ON TABLE waitlist IS 'Almacena los correos electrónicos de usuarios interesados en el juego';
COMMENT ON COLUMN waitlist.id IS 'Identificador único autoincrementable';
COMMENT ON COLUMN waitlist.email IS 'Dirección de correo electrónico del usuario';
COMMENT ON COLUMN waitlist.created_at IS 'Fecha y hora de registro'; 