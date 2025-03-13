import { Resend } from "resend";

export async function POST(req) {
  try {
    // Read data sent from the client (form submission)
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing fields" }), { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "no-reply@resend.dev",  // Resend test domain (use custom domain for production)
      to: "fahmizaina9@gmail.com", // Replace with your email
      subject: `New Contact Form Submission: ${subject}`,  // Dynamic subject from form
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`  // Dynamic message from form
    });

    return new Response(JSON.stringify({ success: true, response }), { status: 200 });

  } catch (error) {
    console.error("❌ Resend API Error:", error);
    return new Response(JSON.stringify({ success: false, error: "Email not sent" }), { status: 500 });
  }
}
