import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const POST = async (request: NextRequest) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY!;

  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Missing token" },
        { status: 400 }
      );
    }

    const googleResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      new URLSearchParams({
        secret: secretKey,
        response: token,
      }).toString(),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const data = googleResponse.data;

    return NextResponse.json({
      success: data.success,
      score: data.score,
    });
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return NextResponse.json(
      { success: false, error: "Verification failed" },
      { status: 500 }
    );
  }
};
