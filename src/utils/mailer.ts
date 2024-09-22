import nodemailer from "nodemailer";

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
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSCODE,
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
        html: `<div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <div style="background-color: #000; color: #fff; padding: 10px; text-align: center; border-radius: 8px 8px 0 0;">
                    <h2 style=" color: #fff;">Empyrean <span  style=" color: #eab308;">UI</span></h2>
                </div>
                <div style="padding: 20px;">
                    <p>Dear ${firstname},</p>
                    <p>Your OTP (One-Time Password) for verification is:</p>
                    <h3 style="font-size:26px;"> <strong>${otp}</strong></h3>
                    <p>Please use this OTP to proceed with your action.</p>
                    <p>If you did not request this OTP, please ignore this email.</p>
                </div>
                <div style="text-align: center; margin-top: 20px; color: #555;">
                    <p>This email was sent automatically. Please do not reply to this email.</p>
                </div>
            </div>`,
      };
    case "Verify":
      return {
        subject: "Your OTP for Verification",
        text: `Hi ${firstname}, 
Your OTP (One-Time Password) for verification is: ${otp}`,
        html: `<div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <div style="background-color: #000; color: #fff; padding: 10px; text-align: center; border-radius: 8px 8px 0 0;">
                    <h2 style=" color: #fff;">Empyrean <span  style=" color: #eab308;">UI</span></h2>
                </div>
                <div style="padding: 20px;">
                    <p>Dear ${firstname},</p>
                    <p>Your OTP (One-Time Password) for verification is:</p>
                    <h3 style="font-size:26px;"> <strong>${otp}</strong></h3>
                    <p>Please use this OTP to proceed with your action.</p>
                    <p>If you did not request this OTP, please ignore this email.</p>
                </div>
                <div style="text-align: center; margin-top: 20px; color: #555;">
                    <p>This email was sent automatically. Please do not reply to this email.</p>
                </div>
            </div>`,
      };
    case "ForgotPassword":
      return {
        subject: "Reset Your Password",
        text: `Hi ${firstname}, 
Your OTP (One-Time Password) to reset your password is: ${otp}`,
        html: `<div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <div style="background-color: #000; color: #fff; padding: 10px; text-align: center; border-radius: 8px 8px 0 0;">
                    <h2 style=" color: #fff;">Empyrean <span  style=" color: #eab308;">UI</span></h2>
                </div>
                <div style="padding: 20px;">
                    <p>Dear ${firstname},</p>
                    <p>Your OTP (One-Time Password) to reset your password is:</p>
                    <h3 style="font-size:26px;"> <strong>${otp}</strong></h3>
                    <p>Please use this OTP to proceed with your action.</p>
                    <p>If you did not request this OTP, please ignore this email.</p>
                </div>
                <div style="text-align: center; margin-top: 20px; color: #555;">
                    <p>This email was sent automatically. Please do not reply to this email.</p>
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
      from: process.env.MY_EMAIL,
      to: user.email,
      ...mailBody,
    });
    return;
  } catch (error: any) {
    throw { message: error.message };
  }
};

export default sendMail;
