import { connectToDb } from "@/app/lib/db";
import User from "@/app/lib/RegistrationModel";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(request) {
  try {
    await connectToDb();

    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (!token || !email) {
      return NextResponse.json(
        { error: "Invalid or missing token/email" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    if (new Date() > new Date(user.verificationTokenExpiry)) {
      return NextResponse.json(
        { error: "Verification token has expired." },
        { status: 400 }
      );
    }

    // Update status
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiry = undefined;
    await user.save();

    // -----------------------------
    // SEND WELCOME EMAIL
    // -----------------------------
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "query@driverse.ai",
        pass: "Jockeybanyan$",
      },
    });

    const welcomeHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; background: #f8f9fc; padding: 40px;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">

            <h2 style="text-align: center; color: #1a73e8;">Welcome to Driverse 🚗✨</h2>

            <p style="font-size: 16px; color: #333;">
              Hi <b>${user.username || "User"}</b>,  
            </p>

            <p style="font-size: 16px; color: #555;">
              Your email has been successfully <b>verified</b> and your account is now active!
            </p>

            <div style="text-align: center; margin: 25px 0;">
              <img src="https://cdn-icons-png.flaticon.com/512/1048/1048313.png" width="120" />
            </div>

            <p style="font-size: 16px; color: #555;">
              You can now explore all features of <b>Driverse</b> including:
            </p>

            <ul style="font-size: 15px; color: #444; line-height: 1.7;">
              <li>🚗 Roadside Assistance</li>
              <li>🔧 Mechanic & Tow Service Requests</li>
              <li>📍 Location Based Support</li>
              <li>⚡ Fast & Reliable Service</li>
            </ul>

            <p style="font-size: 16px; color: #333; margin-top: 20px;">
              We’re excited to have you on board and look forward to serving you whenever you need assistance.
            </p>

            <div style="text-align: center; margin-top: 35px;">
              <a href="https://driverse.ai" style="background: #1a73e8; color: white; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-size: 16px;">
                Explore Driverse
              </a>
            </div>

            <p style="font-size: 14px; color: #999; text-align: center; margin-top: 30px;">
              © ${new Date().getFullYear()} Driverse. All rights reserved.
            </p>

          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `query@driverse.ai`,
      to: user.email,
      subject: "🎉 Welcome to Driverse – Your Email is Verified!",
      html: welcomeHtml,
    });

    return NextResponse.json(
      { message: "Email verified successfully & welcome email sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
