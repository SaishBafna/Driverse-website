import { connectToDb } from "@/app/lib/db";
import User from "@/app/lib/RegistrationModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDb();

    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (!token || !email) {
      return NextResponse.json({ error: "Invalid or missing token/email" }, { status: 400 });
    }

    const user = await User.findOne({ email });
      console.log("user",user);
    if (!user) {
      return NextResponse.json({ error: "user Not found " }, { status: 400 });
    }

    if (new Date() > new Date(user.verificationTokenExpiry)) {
      return NextResponse.json(
        { error: "Verification token has expired." },
        { status: 400 }
      );
    }

    // if(user.verificationToken==undefined){

    // }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({ message: "Email verified successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

