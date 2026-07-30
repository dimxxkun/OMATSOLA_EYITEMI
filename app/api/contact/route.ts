import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 400 }
      );
    }

    const { name, email, message } = body || {};

    // Validate input existence
    if (!name || typeof name !== "string" || !name.trim() ||
        !email || typeof email !== "string" || !email.trim() ||
        !message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "All fields are required and must be non-empty strings" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not configured. Email functionality is disabled.");
      return NextResponse.json(
        { message: "Message received. Email service is not configured." },
        { status: 200 }
      );
    }

    // Initialize Resend only when API key is available
    const resend = new Resend(resendApiKey);

    // Sanitize inputs to prevent XSS
    const sanitize = (str: string) => {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
    };

    const sanitizedName = sanitize(name.trim());
    const sanitizedEmail = sanitize(email.trim());
    const sanitizedMessage = sanitize(message.trim());
    // Strip line breaks for subject line to prevent header injection
    const safeSubjectName = name.replace(/[\r\n]/g, " ").trim();

    // Create email content
    const emailContent = `
New Contact Form Submission from Portfolio

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}

---
This message was sent from the portfolio contact form.
    `.trim();

    // Send email using Resend
    try {
      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
        to: "omatsolaeyitemi315@gmail.com",
        replyTo: email.trim(),
        subject: `Contact Form: ${safeSubjectName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="margin-top: 20px;">
              <p><strong>Name:</strong> ${sanitizedName}</p>
              <p><strong>Email:</strong> ${sanitizedEmail}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              This message was sent from the portfolio contact form.
            </p>
          </div>
        `,
        text: emailContent,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }
    } catch (resendError) {
      console.error("Resend error:", resendError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

