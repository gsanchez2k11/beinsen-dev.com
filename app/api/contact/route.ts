import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, email, company, country, product, message, recipient } = await request.json();

    // Configuración del transportador de correo
    const port = Number(process.env.EMAIL_SERVER_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
      port: port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Web Beinsen" <${process.env.EMAIL_SERVER_USER || 'no-reply@beinsen.com'}>`,
      to: recipient, // alberto@futura.es
      subject: `Nueva solicitud de contacto: ${product || 'General'} - ${name}`,
      text: `Hola Alberto,\n\nHas recibido una nueva solicitud de contacto:\n\nNombre: ${name}\nEmpresa: ${company || 'N/A'}\nPaís: ${country || 'N/A'}\nEmail: ${email || 'N/A'}\nTeléfono: ${phone || 'N/A'}\nProducto de interés: ${product || 'Consultoría General'}\n\nMensaje:\n${message || 'Sin mensaje'}\n\nUn saludo.`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 20px; padding: 30px;">
          <h2 style="color: #FF6600; margin-top: 0;">Nueva Solicitud de Contacto</h2>
          <p>Has recibido una nueva solicitud desde el formulario de contacto:</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Empresa:</strong> ${company || 'N/A'}</p>
          <p><strong>País:</strong> ${country || 'N/A'}</p>
          <p><strong>Teléfono:</strong> ${phone || 'N/A'}</p>
          <p><strong>Interés:</strong> ${product || 'Consultoría General'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 10px; font-style: italic;">${message || 'Sin mensaje'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">Este correo ha sido generado automáticamente por el sitio web beinsen.com</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
