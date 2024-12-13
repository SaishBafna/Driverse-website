import { connectToDb } from "@/app/lib/db";
import User from "@/app/lib/RegistrationModel";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    await connectToDb();
    const data = await request.json();
    const { serviceType, username, phone, email, companyAddress, password, confirmPassword } = data;

    if (!serviceType || !username || !phone || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    const userExists = await User.findOne({ $or: [{ email }, { phone }] });
    if (userExists) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });

      return NextResponse.json({ message: "You Already Register For The Service" }, { status: 400 });

    }

    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Hash the token using SHA-256
    // const hashedToken = crypto.createHash("sha256").update(verificationToken).digest("hex");

    // Set an expiry time for the token (e.g., 1 hour from now)
    const verificationTokenExpiry = new Date(Date.now() + (15 * 60 * 1000));
    // Set token expiry to 15 minutes from now
    // const verificationTokenExpiry = new Date(Date.now() + 3600000);


    const newUser = new User({
      serviceType,
      username,
      phone,
      email,
      companyAddress,
      password,
      verificationToken,
      verificationTokenExpiry
    });

    await newUser.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    // console.log("transporter", transporter);
    const verificationUrl = `${process.env.FRONTEND_URL}/Components/verify?token=${verificationToken}&email=${email}`;
    // console.log("verificationUrl", verificationUrl);
    // await transporter.sendMail({
    //   to: email,
    //   subject: "Verify Your Email - Action Required",
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
    //       <h2 style="color: #4CAF50; text-align: center;">Welcome to Our Service!</h2>
    //       <p style="font-size: 16px; color: #333; line-height: 1.6;">
    //         Hi there,
    //       </p>
    //       <p style="font-size: 16px; color: #333; line-height: 1.6;">
    //         Thank you for registering with us! To get started, we need to verify your email address. Simply click the button below to verify your account:
    //       </p>
    //       <div style="text-align: center; margin: 20px 0;">
    //         <a href="${verificationUrl}" 
    //           style="display: inline-block; font-size: 16px; color: #ffffff; background-color: #4CAF50; padding: 12px 24px; text-decoration: none; border-radius: 4px;">
    //           Verify Email
    //         </a>
    //       </div>
    //       <p style="font-size: 16px; color: #333; line-height: 1.6;">
    //         If you didn’t register with us, please ignore this email.
    //       </p>
    //       <p style="font-size: 14px; color: #999; line-height: 1.6; text-align: center;">
    //         Need help? Contact our support team at <a href="mailto:support@example.com" style="color: #4CAF50;">support@example.com</a>.
    //       </p>
    //       <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
    //       <p style="font-size: 12px; color: #999; line-height: 1.6; text-align: center;">
    //         This is an automated email, please do not reply. You received this email because you signed up on our platform.
    //       </p>
    //     </div>
    //   `,
    // });
    
    await transporter.sendMail({
      to: email,
      subject: "Verify Your Email - Driverse",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="text-align: center; padding: 20px 0;">
            <img src="https://drive.google.com/file/d/1WA0bhwCtM6v6h5jgWLFISvFT0WBYTmOh/view?pli=1" alt="Driverse Logo" style="max-width: 150px;" />
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px auto; max-width: 600px;">
            <h2 style="text-align: center; color: #4CAF50;">Welcome to Driverse!</h2>
            <p>Hello,</p>
            <p>Thank you for signing up for Driverse. Please verify your email address to activate your account and start exploring.</p>
            <p style="text-align: center;">
              <a href="${verificationUrl}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background: #4CAF50; text-decoration: none; border-radius: 4px;">Verify Email</a>
            </p>
            <p>If the button above doesn’t work, copy and paste the following link into your browser:</p>
            <p><a href="${verificationUrl}" style="color: #4CAF50;">${verificationUrl}</a></p>
            <p>Cheers,</p>
            <p>The Driverse Team</p>
          </div>
          <div style="text-align: center; font-size: 12px; color: #aaa; margin-top: 20px;">
            <p>&copy; ${new Date().getFullYear()} Driverse. All rights reserved.</p>
          </div>
        </div>
      `,
    });
    

    return NextResponse.json({ message: "Registration successful. Verification email sent." }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
