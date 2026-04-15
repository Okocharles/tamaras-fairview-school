/**
 * lib/comms.ts
 * Production-ready communication service handling SMS (via Termii) and Email (via Resend).
 */

import { Resend } from 'resend';
import axios from 'axios';

const resend = new Resend(process.env.RESEND_API_KEY);

interface MessagePayload {
  to: string;
  subject?: string;
  body: string;
  type: 'sms' | 'email';
}

/**
 * Sends a broadcast message across the selected channel.
 */
export async function sendBroadcast({ to, subject, body, type }: MessagePayload) {
  if (type === 'email') {
    return await sendEmail(to, subject || 'School Notification', body);
  } else {
    return await sendSMS(to, body);
  }
}

/**
 * Sends email using Resend
 */
async function sendEmail(to: string, subject: string, body: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Tamara's Fairview <portal@tamaras.edu.ng>",
      to: [to],
      subject: subject,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1B2B5E;">
          <h2 style="color: #C9981F;">Tamara's Fairview SMS</h2>
          <hr />
          <p>${body}</p>
          <br />
          <p style="font-size: 12px; color: #94A3B8;">This is an automated message from the school portal.</p>
        </div>
      `,
    });

    if (error) return { success: false, error };
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err };
  }
}

/**
 * Sends SMS using Termii (Nigeria-optimized)
 */
async function sendSMS(to: string, message: string) {
  try {
    const response = await axios.post('https://api.ng.termii.com/api/sms/send', {
      to: to,
      from: process.env.TERMII_SENDER_ID || "TAMARA",
      sms: message,
      type: "plain",
      channel: "generic",
      api_key: process.env.TERMII_API_KEY,
    });

    if (response.data.code === 'ok') {
      return { success: true, data: response.data };
    }
    return { success: false, error: response.data.message };
  } catch (err) {
    return { success: false, error: err };
  }
}
