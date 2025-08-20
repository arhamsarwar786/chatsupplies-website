// app/Email/Form.tsx 
'use client';

import { useState } from 'react';
import Form from './Form';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus('Sending...');
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Email sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('Failed to send: ' + result.message);
      }
    } catch (error) {
      setStatus('Error sending email');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Send Email Template</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-sm transition-all duration-300 hover:bg-gray-800 font-semibold"
        >
          Send Email Template
        </button>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </div>
  );
}