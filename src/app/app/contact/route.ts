import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_RECEIVER,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Message</h2>

      <p><b>Name:</b> ${body.firstName} ${body.lastName}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Company:</b> ${body.company}</p>
      <p><b>Job Title:</b> ${body.jobTitle}</p>
      <p><b>Interests:</b> ${body.interests.join(", ")}</p>
      <p><b>Message:</b> ${body.message}</p>
    `
  });

  return NextResponse.json({ success: true });

}