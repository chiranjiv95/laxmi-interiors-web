import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, phone } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail to your friend
    await transporter.sendMail({
      from: `"Laxmi Modular Kitchen Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your friend's email
      subject: "New Contact Form Submission",
      replyTo: `${name} <${email}>`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // Send confirmation to the user
    await transporter.sendMail({
      from: `"Laxmi Modular Kitechen & Interiors" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting us. We have received your message:</p>
        <blockquote>${message}</blockquote>
        <p>We'll get back to you shortly.</p>
        <p>Best regards,<br/>Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
