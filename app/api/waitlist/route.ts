import { NextResponse } from 'next/server';
import { initWaitlistTable, addToWaitlist, getAllWaitlistEmails } from '@/lib/db';

// Inicializa la tabla waitlist al cargar la API
initWaitlistTable().catch(error => {
  console.error('Failed to initialize waitlist table:', error);
});

export async function POST(request: Request) {
  try {
    // Obtener los datos del request
    const body = await request.json();
    const { email } = body;
    
    // Validación básica
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'El email es inválido' },
        { status: 400 }
      );
    }
    
    // Añadir email a la base de datos PostgreSQL
    const result = await addToWaitlist(email);
    
    // Determinar el status code basado en si es un email nuevo o existente
    const statusCode = result.isNew ? 201 : 200;
    
    // Retornar respuesta exitosa
    return NextResponse.json(
      { success: true, message: result.message },
      { status: statusCode }
    );
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Obtener la lista de correos (protegido con token)
export async function GET(request: Request) {
  try {
    // Extraer el token de la URL
    const url = new URL(request.url);
    const token = url.searchParams.get('token');
    
    // Verificar el token (usando variable de entorno)
    const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'ad-simulator-secret-token';
    
    if (!token || token !== ADMIN_TOKEN) {
      return NextResponse.json(
        { success: false, message: 'Acceso no autorizado' },
        { status: 401 }
      );
    }
    
    // Obtener emails de la base de datos PostgreSQL
    const emails = await getAllWaitlistEmails();
    
    // Retornar la lista de correos
    return NextResponse.json({ 
      success: true, 
      count: emails.length,
      emails 
    });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 