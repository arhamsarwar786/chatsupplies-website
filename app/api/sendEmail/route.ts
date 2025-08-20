// app/api/sendEmail/route.ts
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react';
import { render } from '@react-email/render';
import GoldPrimoEmail from '../../Email/page';
import juice from 'juice';

// Hardcoded email credentials (for testing only - remove in production)
const EMAIL_CONFIG = {
  USER: 'numan.ishaq92@gmail.com',
  PASS: 'biyv khuk mrsk wvht', // Your app password with spaces
  RECEIVING: 'asarsaleem@gmail.com'
};

export async function POST(request: NextRequest) {
  try {
    console.log('Using hardcoded email config:', {
      user: EMAIL_CONFIG.USER,
      pass: '***', // Don't log actual password
      receiving: EMAIL_CONFIG.RECEIVING
    });

    // Render the static template to HTML
    const emailHtml = await render(React.createElement(GoldPrimoEmail));
     
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_CONFIG.USER,
        pass: EMAIL_CONFIG.PASS,
      },
    });

    // Test the connection first
    try {
      await transporter.verify();
      console.log('SMTP server is ready to send messages');
    } catch (verifyError) {
      console.error('SMTP connection failed:', verifyError);
      
      // Proper error handling for unknown type
      let errorMessage = 'SMTP connection failed';
      if (verifyError instanceof Error) {
        errorMessage = verifyError.message;
      } else if (typeof verifyError === 'string') {
        errorMessage = verifyError;
      }
      
      return NextResponse.json({ 
        error: 'SMTP connection failed - check your credentials',
        details: errorMessage 
      }, { status: 500 });
    }

    const emailText = `
Gold Primo Email Template
This is an automated email containing the Gold Primo template.
    `.trim();

    const inlinedHtml = juice(emailHtml);

    // Send the email
   const info = await transporter.sendMail({
  from: EMAIL_CONFIG.USER,
  to: EMAIL_CONFIG.RECEIVING,
  subject: `Gold Primo Email Template`,
  html: `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Gold Primo Email</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
        ${inlinedHtml}   
      </body>
    </html>`,
  text: emailText,
});

    console.log('Email sent successfully! Message ID:', info.messageId);

    return NextResponse.json({ 
      message: 'Email sent successfully!',
      messageId: info.messageId 
    }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Proper error handling for unknown type
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: errorMessage 
    }, { status: 500 });
  }
}