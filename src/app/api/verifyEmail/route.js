
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, userId } = body;

    if (!email || !userId) {
      return NextResponse.json({ error: "Email and User ID are required" }, { status: 400 });
    }

    // Generate a verification token
    const token = jwt.sign({ userId, email }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    const verificationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/Components/GmailVerify?token=${token}`;

    // Set up nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"YourAppName" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your emails",
      html: `
        <p>Thank you for registering. Please click the link below to verify your email:</p>
        <a href="${verificationUrl}">${verificationUrl}</a>
      `,
    });

    return NextResponse.json({ message: "Verification email sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
