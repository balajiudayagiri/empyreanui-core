import nodemailer from "nodemailer";

type mailTypes = "Verify" | "Resend" | "ForgotPassword";

const transporter = nodemailer.createTransport({
  host: "SMTPConnection.gmail.com",
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASS,
  },
});

const baseUrl = "http://localhost:3000/api";

const sendMail = async (user: any, mailType: mailTypes) => {
  try {
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: user.email,
      subject: "",
      text: `Hi ${user.firstname},`,
    });

    return;
  } catch (error: any) {
    throw { message: error.message };
  }
};

export default sendMail;
