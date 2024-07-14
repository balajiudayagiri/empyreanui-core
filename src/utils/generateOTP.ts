function generateOTP(limit: number = 6) {
  const digits = "0123456789";

  let OTP = digits[1 + Math.floor(Math.random() * 9)];

  for (let i = 1; i < limit; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return +OTP;
}

export default generateOTP;
