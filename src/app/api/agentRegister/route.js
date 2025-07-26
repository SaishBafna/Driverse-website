import { connectToDb } from "@/app/lib/db";
import User from "@/app/lib/RegistrationModel";
import { console } from "inspector";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    await connectToDb();
    const data = await request.json();
    const { serviceType, username, phone, email, password, confirmPassword } = data;

    if (!serviceType || !username || !phone || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    const userExists = await User.findOne({ email });
    const userExistsphone = await User.findOne({ phone });

    console.log("User exists:", userExists);

    if (userExists) {
      console.log("User already exists:", userExists);
      return NextResponse.json({ error: "User with this email already exists" }, { status: 400 });
    }

    if (userExistsphone) {
      console.log("User already exists:", userExistsphone);
      return NextResponse.json({ error: "User with this phone number already exists" }, { status: 400 });
    }

    const newUser = new User({
      serviceType,
      username,
      phone,
      email,
      // companyAddress,
      password
    });

    await newUser.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    
    const trainingLink = "https://driverse.ai/dashboard/AgentTraining"; // Replace with actual training link
    
    await transporter.sendMail({
      to: email,
      subject: "Welcome to Our Agent Program - Next Steps",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa;">
            <img src="https://driverse.ukvalley.com/driver_logo.png" alt="Company Logo" style="max-width: 180px;" />
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #2c3e50; margin-top: 0;">Welcome to Our Agent Training Program!</h2>
            
            <p>Dear ${username},</p>
            
            <p>Thank you for registering as an agent with us. We're excited to have you on board and look forward to working together.</p>
            
            <p>To get started with your agent journey, please complete our mandatory training program:</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${trainingLink}" 
                 style="display: inline-block; 
                        padding: 12px 24px; 
                        background-color: #3498db; 
                        color: #ffffff; 
                        text-decoration: none; 
                        border-radius: 4px; 
                        font-weight: bold;">
                Access Agent Training Portal
              </a>
            </div>
            
            <p>The training covers:</p>
            <ul style="padding-left: 20px;">
              <li>Our company policies and procedures</li>
              <li>Sales techniques and best practices</li>
              <li>Customer service standards</li>
              <li>Commission structure and payment process</li>
              <li>Tools and resources available to you</li>
            </ul>
            
            <p><strong>Training Duration:</strong> Approximately 2 hours</p>
            <p><strong>Deadline:</strong> Please complete within 7 days of registration</p>
            
            <p>If you have any questions about the training or the agent program, please don't hesitate to contact our support team at <a href="mailto:agentsupport@yourcompany.com">agentsupport@yourcompany.com</a>.</p>
            
            <p>We're committed to your success as an agent and look forward to seeing you thrive in our program!</p>
            
            <p>Best regards,<br>
            The Agent Support Team</p>
          </div>
          
          <div style="text-align: center; padding: 20px; background-color: #f8f9fa; font-size: 12px; color: #7f8c8d;">
            <p>&copy; ${new Date().getFullYear()} Driverse. All rights reserved.</p>
            <p>
              <a href="#" style="color: #7f8c8d; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
              <a href="#" style="color: #7f8c8d; text-decoration: none; margin: 0 10px;">Terms of Service</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "Registration successful. Training information sent to your email." }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}