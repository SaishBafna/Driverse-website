import { connectToDb } from "@/app/lib/db";
import User from "@/app/lib/RegistrationModel";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // First, verify we can parse the request body
    let body;
    try {
      body = await request.json();
    } catch (jsonError) {
      console.error("JSON parsing error:", jsonError);
      return NextResponse.json(
        { error: "Invalid JSON format in request body" },
        { status: 400 }
      );
    }

    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    await connectToDb();

    // Check if user exists with this email
    const user = await User.findOne({ email }).select("email");

    if (!user) {
      return NextResponse.json(
        { exists: false, message: "Email not found in our system" },
        { status: 404 }
      );
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Update user with verification token and expiry (15 minutes from now)
    const verificationTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);
    await User.updateOne(
      { email },
      {
        verificationToken,
        verificationTokenExpiry,
      }
    );

    // Create verification URL
    const verificationUrl = `${process.env.FRONTEND_URL}/Components/verify?token=${verificationToken}&email=${email}`;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `query@driverse.ai`,
      to: email,
      subject: "Verify Your Email - Driverse",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="text-align: center; padding: 20px 0;">
            <img src="https://driverse.ukvalley.com/driver_logo.png" alt="Driverse Logo" style="max-width: 150px;" />
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px auto; max-width: 600px;">
            <h2 style="text-align: center; color: #4CAF50;">Email Verification</h2>
            <p>Hello,</p>
            <p>We received a request to verify your email address. Please click the button below to verify your email:</p>
            <p style="text-align: center;">
              <a href="${verificationUrl}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background: #4CAF50; text-decoration: none; border-radius: 4px;">Verify Email</a>
            </p>
            <p>If you didn't request this, you can safely ignore this email.</p>
            <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
            <p><a href="${verificationUrl}" style="color: #4CAF50;">${verificationUrl}</a></p>
            <p>Cheers,</p>
            <p>The Driverse Team</p>
          </div>
          <div style="text-align: center; font-size: 12px; color: #aaa; margin-top: 20px;">
            <p>&copy; ${new Date().getFullYear()} Driverse. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send verification email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        exists: true,
        success: true,
        email: user.email,
        message: "Verification email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email verification error:", error);
    return NextResponse.json(
      {
        error: error.message || "Internal server error",
        details:
          process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
