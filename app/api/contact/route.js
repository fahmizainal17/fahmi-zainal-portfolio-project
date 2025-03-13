import { Resend } from "resend";

export const runtime = 'nodejs'

export async function POST(req) {
    console.log("🚀 Contact form submitted!");  // <--- This should always run first
  
    try {
      const { name, email, subject, message } = await req.json();
      console.log("✅ Data Received:", { name, email, subject, message });
  
      // If any field is missing:
      if (!name || !email || !subject || !message) {
        console.log("❌ Missing fields:", { name, email, subject, message });
        return new Response(
          JSON.stringify({ success: false, error: "Missing fields" }), 
          { status: 400 }
        );
      }
  
      // Attempt to send email
      console.log("🔑 API Key Loaded:", process.env.RESEND_API_KEY ? "YES" : "NO");
      const resend = new Resend(process.env.RESEND_API_KEY);
      console.log("📧 Email Sending...");
  
      const response = await resend.emails.send({
        from: "no-reply@resend.dev",
        to: "fahmizainal9@gmail.com",
        subject: `Fahmi X ShadcnUI - New message from ${email} : ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
      });
  
      console.log("📧 Email Sent Successfully:", response);
  
      return new Response(JSON.stringify({ success: true, response }), { status: 200 });
    } catch (error) {
      console.error("❌ Resend API Error:", error);
      return new Response(JSON.stringify({ success: false, error: "Email not sent" }), {
        status: 500,
      });
    }
  }
  