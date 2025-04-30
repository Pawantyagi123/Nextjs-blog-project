import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/emailModel";
import { NextResponse } from "next/server";


const LoadDB = async ()=>{
    await connectDB();
}

LoadDB()

export async function POST(req) {
    try {
      const formData = await req.formData();
      const email = formData.get("email");
  
      // Check if email is provided
      if (!email) {
        return NextResponse.json({ success: false, msg: "Email is required" }, { status: 400 });
      }
  
      // Basic email format validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json({ success: false, msg: "Invalid email format" }, { status: 400 });
      }
  
      // Save to DB
      await EmailModel.create({ email });
  
      return NextResponse.json({ success: true, msg: "Email subscribed successfully" });
  
    } catch (error) {
      console.error("Error subscribing email:", error);
      return NextResponse.json({ success: false, msg: "Server error, please try again later" }, { status: 500 });
    }
  }

  export async function GET(req) {
    const emails = await EmailModel.find({});
return NextResponse.json({emails});
  }

  export async function DELETE(req) {
    const mongoId = await req.nextUrl.searchParams.get("id")
    await EmailModel.findByIdAndDelete(mongoId);
    return NextResponse.json({success:true,msg:"email deleted"})
  }