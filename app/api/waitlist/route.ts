import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Initialize connection pool
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL_NON_POOLING,
});

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    
    // Check if email already exists
    const checkResult = await pool.query(
      'SELECT * FROM waitlist WHERE email = $1',
      [email]
    );
    
    if (checkResult.rowCount > 0) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 200 });
    }
    
    // Insert new email
    await pool.query(
      'INSERT INTO waitlist (email) VALUES ($1)',
      [email]
    );
    
    console.log(`Added email to waitlist: ${email}`);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error adding email to waitlist:', error);
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // Versión simplificada sin verificación de token
  try {
    const result = await pool.query('SELECT * FROM waitlist ORDER BY created_at DESC');
    return NextResponse.json({ emails: result.rows }, { status: 200 });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json({ error: 'Failed to fetch waitlist' }, { status: 500 });
  }
} 