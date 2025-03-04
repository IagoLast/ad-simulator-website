'use client';

import { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

export default function WaitlistPage() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmails() {
      try {
        const response = await fetch('/api/waitlist', {
          method: 'GET',
          headers: {
            // Para saltarse la autenticación en la API existente
            'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_ADMIN_TOKEN || 'default-token'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setEmails(data.emails || []);
        } else {
          console.error('Error fetching waitlist');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEmails();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Waitlist Subscribers</h1>
      
      {loading ? (
        <p>Loading...</p>
      ) : emails.length === 0 ? (
        <p>No subscribers yet</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emails.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{new Date(item.created_at).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      
      <p className="mt-4 text-sm">Total subscribers: {emails.length}</p>
    </div>
  );
} 