// app/api/sendEmail/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server'; // Import NextResponse for App Router responses

export async function POST(request) { // Changed from default export to named POST export
    // The request body is now accessed via request.json()
    const { firstName, lastName, email, phone, subject, message } = await request.json();

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
        return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // Define email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVING_EMAIL, // Ensure this is set in .env.local and Vercel
            subject: `Contact Form Submission: ${subject}`,
            html: `
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Respond with success using NextResponse
        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        // Respond with an error using NextResponse
        return NextResponse.json({ message: 'Failed to send message. Please try again later.' }, { status: 500 });
    }
}

// You can also define other HTTP methods if needed, e.g.:
/*
export async function GET(request) {
    return NextResponse.json({ message: 'GET method not supported for this endpoint.' }, { status: 405 });
}
*/
