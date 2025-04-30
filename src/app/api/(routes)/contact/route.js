import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, state, country, reason, message } = body;

    if (!name || !email || !phone || !state || !country || !reason || !message) {
      return new Response(JSON.stringify({ success: false, message: "All fields are required." }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `📩 New Contact Message from ${name}`,
      html: `
        <h3>Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>State/Region:</strong> ${state}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Message sent successfully!" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ success: false, message: "Server error. Please try again later." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
