import { connectToDb } from "@/app/lib/db";
import User from "@/app/lib/RegistrationModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDb();

    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    // Check if user exists with this email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { exists: false, message: "Email not found in our system" },
        { status: 404 }
      );
    }

    if (user.isVerified) {
      return NextResponse.json(
        {
          success: true,
          exists: true,
          isVerified: true,
          message: "Email is already verified",
        },
        { status: 403 }
      );
    } else {
      return NextResponse.json(
        { exists: true, email: user.email },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Email check error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
