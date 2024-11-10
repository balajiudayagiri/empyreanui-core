import nodemailer from "nodemailer";
import { ENV } from "./env_constants";

type MailTypes = "Verify" | "Resend" | "ForgotPassword";

/**
 * Configures the email transporter using nodemailer with Gmail service.
 *
 * @constant
 * @type {nodemailer.Transporter}
 */
const transporter: nodemailer.Transporter = nodemailer.createTransport({
  host: "SMTPConnection.gmail.com",
  service: "gmail",
  auth: {
    user: ENV.MY_EMAIL,
    pass: ENV.MY_PASSCODE,
  },
});
/**
 * Generates the email subject and content based on the mail type.
 *
 * @param {MailTypes} mailType - The type of email to be sent.
 * @param {Object} data - The data to be included in the email.
 * @param {string} data.resetLink - The password reset link (used only for "ForgotPassword" type).
 * @param {string} data.firstname - The recipient's first name.
 * @param {number|string} data.otp - The OTP to be included in the email.
 * @param {string} [data.name] - The recipient's name (optional, used for personalizing the email).
 *
 * @returns {Object} The email options including subject, text, and HTML content.
 */
const mail = (
  mailType: MailTypes,
  data: {
    resetLink?: string;
    firstname: string;
    otp: number | string;
    name?: string;
  }
) => {
  const { firstname, otp } = data;

  switch (mailType) {
    case "Resend":
      return {
        subject: "Resent OTP for Verification",
        text: `Hi ${firstname}, 
Your OTP (One-Time Password) for verification is: ${otp}`,
        html: `<div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1); font-family: Arial, sans-serif; color: #333;">
          <!-- Header Section -->
          <div style="background-color: #000; color: #fff; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
              <h2 style="margin: 0; font-size: 28px; font-weight: 900;">Empyrean<span style="color: #facc14;">UI</span></h2>
          </div>

          <!-- Body Section -->
          <div style="padding: 30px;">
              <p style="font-size: 18px;">Hello <strong>${firstname}</strong>,</p>
              <p style="font-size: 16px; line-height: 1.6;">Your OTP (One-Time Password) for verification is:</p>
              <h2 style="font-size: 32px; color: #facc14; text-align: center; margin: 30px 0;">${otp}</h2>
              <p style="font-size: 16px; line-height: 1.6;">Please enter this OTP to proceed with your request. This code is valid for a limited time.</p>
              <p style="font-size: 16px; color: #d9534f;">If you did not request this, please ignore this message or contact our support team immediately.</p>
          </div>

          <!-- Footer Section -->
          <div style="text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 0 0 10px 10px;">
              <p style="font-size: 14px; color: #777; margin: 0;">This is an automated message. Please do not reply.</p>
              <p style="font-size: 14px; color: #777; margin: 5px 0;">Need help? <a href="#" style="color: #facc14; text-decoration: none;">Contact Support</a></p>
          </div>
      </div>`,
      };

    case "Verify":
      return {
        subject: "Your OTP for Verification",
        text: `Hi ${firstname}, 
Your OTP (One-Time Password) for verification is: ${otp}`,
        html: `<div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1); font-family: Arial, sans-serif; color: #333;">
          <!-- Header Section -->
          <div style="background-color: #000; color: #fff; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
              <h2 style="margin: 0; font-size: 28px; font-weight: 900;">Empyrean<span style="color: #facc14;">UI</span></h2>
          </div>

          <!-- Body Section -->
          <div style="padding: 30px;">
              <p style="font-size: 18px;">Hello <strong>${firstname}</strong>,</p>
              <p style="font-size: 16px; line-height: 1.6;">Your OTP (One-Time Password) for verification is:</p>
              <h2 style="font-size: 32px; color: #facc14; text-align: center; margin: 30px 0;">${otp}</h2>
              <p style="font-size: 16px; line-height: 1.6;">Please enter this OTP to proceed with your request. This code is valid for a limited time.</p>
              <p style="font-size: 16px; color: #d9534f;">If you did not request this, please ignore this message or contact our support team immediately.</p>
          </div>

          <!-- Footer Section -->
          <div style="text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 0 0 10px 10px;">
              <p style="font-size: 14px; color: #777; margin: 0;">This is an automated message. Please do not reply.</p>
              <p style="font-size: 14px; color: #777; margin: 5px 0;">Need help? <a href="#" style="color: #facc14; text-decoration: none;">Contact Support</a></p>
          </div>
      </div>`,
      };

    case "ForgotPassword":
      return {
        subject: "Reset Your Password",
        text: `Hi ${firstname}, 
Your OTP (One-Time Password) to reset your password is: ${otp}`,
        html: `<div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1); font-family: Arial, sans-serif; color: #333;">
          <!-- Header Section -->
          <div style="background-color: #000; color: #fff; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
              <h2 style="margin: 0; font-size: 28px; font-weight: 900;">Empyrean<span style="color: #facc14;">UI</span></h2>
          </div>

          <!-- Body Section -->
          <div style="padding: 30px;">
              <p style="font-size: 18px;">Hello <strong>${firstname}</strong>,</p>
              <p style="font-size: 16px; line-height: 1.6;">You requested to reset your password. Your One-Time Password (OTP) to complete the process is:</p>
              <h2 style="font-size: 32px; color: #facc14; text-align: center; margin: 30px 0;">${otp}</h2>
              <p style="font-size: 16px; line-height: 1.6;">Please enter this OTP to proceed with your request. This code is valid for a limited time.</p>
              <p style="font-size: 16px; color: #d9534f;">If you did not request a password reset, please ignore this message or contact our support team immediately.</p>
          </div>

          <!-- Footer Section -->
          <div style="text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 0 0 10px 10px;">
              <p style="font-size: 14px; color: #777; margin: 0;">This is an automated message. Please do not reply.</p>
              <p style="font-size: 14px; color: #777; margin: 5px 0;">Need help? <a href="#" style="color: #facc14; text-decoration: none;">Contact Support</a></p>
          </div>
      </div>`,
      };

    default:
      return {};
  }
};

/**
 * Sends an email using the configured transporter based on the provided mail type and data.
 *
 * @param {Object} user - The recipient's details and email content.
 * @param {string} user.email - The recipient's email address.
 * @param {number|string} user.otp - The OTP to be included in the email.
 * @param {string} user.firstname - The recipient's first name.
 * @param {string} [user.name] - The recipient's name (optional).
 * @param {string} [user.resetLink] - The password reset link (used only for "ForgotPassword" type).
 * @param {MailTypes} mailType - The type of email to be sent.
 *
 * @returns {Promise<void>} - A promise that resolves when the email is sent successfully.
 *
 * @throws {Object} - Throws an error if the email sending fails.
 *
 * @example
 * try {
 *   await sendMail({ email: "user@example.com", otp: 123456, firstname: "John" }, "Verify");
 *   // Email sent successfully
 * } catch (error) {
 *   // Handle errors, e.g., log error or notify user
 * }
 */
const sendMail = async (user: any, mailType: MailTypes): Promise<void> => {
  try {
    const mailBody = mail(mailType, user);
    await transporter.sendMail({
      from: ENV.MY_EMAIL,
      to: user.email,
      ...mailBody,
    });
    return;
  } catch (error: any) {
    throw { message: error.message };
  }
};

export default sendMail;
