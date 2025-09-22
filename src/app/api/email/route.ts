import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const POST = async (request: NextRequest) => {
  const { name, email, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    cc: email,
    subject: `Message from ${name} (${email}) - Sent from Portfolio`,
    text: message,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
};
