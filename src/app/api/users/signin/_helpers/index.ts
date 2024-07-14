import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";
import ERROR_MESSAGES from "empyreanui/constants/ERROR_MESSAGES.json";
import users from "empyreanui/models/Empyrean_users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const validateInputs = async (body: {
  email: string;
  password: string;
}) => {
  const errors: { email?: string; password?: string } = {};

  let status = HTTP_STATUS.BAD_REQUEST;

  if (!body.email) {
    errors.email = ERROR_MESSAGES.email_required;
  }

  if (!body.password) {
    errors.password = ERROR_MESSAGES.password_required;
  }

  if (Object.keys(errors).length > 0) {
    throw { ...errors, status };
  } else {
    return body;
  }
};

export const validateUser = async (email: string, password: string) => {
  const errors: { email?: string; password?: string } = {};

  let status: number = HTTP_STATUS.INTERNAL_SERVER_ERROR;

  try {
    const user = await users.findOne({ email });

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const { is_verified, username, _id, name } = user;
        if (is_verified) {
          const payload = { username, email, _id, name, is_verified };
          const token = jwt.sign(payload, process.env.MY_SECRET_TOKEN!);
          return token;
        } else {
          errors.email = ERROR_MESSAGES.email_not_verified;

          status = HTTP_STATUS.FORBIDDEN;

          throw errors;
        }
      } else {
        errors.password = "Password incorrect";

        status = HTTP_STATUS.BAD_REQUEST;

        throw errors;
      }
    } else {
      errors.email = ERROR_MESSAGES.email_invalid;

      status = HTTP_STATUS.NOT_FOUND;

      throw errors;
    }
  } catch (error: any) {
    throw { ...error, error: error.message, status };
  }
};
