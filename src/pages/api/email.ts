import * as sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { subject, text, html } = req.body;
  try {
    sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY as string);
    const msg = {
      to: process.env.NEXT_SENDGRID_TO_EMAIL as string,
      from: process.env.NEXT_SENDGRID_FROM_EMAIL as string,
      subject,
      text,
      html,
    };

    await sgMail.send(msg);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", JSON.stringify(error));
    res.status(500).json({ error: "Error sending email" });
  }
}
