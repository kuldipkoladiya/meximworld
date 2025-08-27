import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ success: false, error: "All fields required" }),
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: `📩 New Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // fallback text
            html: `
                <div style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 30px;">
                  <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    
                    <div style="background: #0073e6; padding: 20px; text-align: center; color: #fff;">
                      <h2 style="margin: 0;">New Inquiry Received</h2>
                    </div>
                    
                    <div style="padding: 20px;">
                      <p style="font-size: 16px; color: #333;">Hello,</p>
                      <p style="font-size: 15px; color: #555;">
                        You’ve received a new inquiry from your website contact form.
                      </p>

                      <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-left: 4px solid #0073e6;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong><br>${message}</p>
                      </div>

                      <p style="font-size: 14px; color: #999;">This message was sent via your website contact form.</p>
                    </div>
                    
                  </div>
                </div>
            `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Email error:", error);
        return new Response(
            JSON.stringify({ success: false, error: "Failed to send message" }),
            { status: 500 }
        );
    }
}
