import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";
import ERROR_MESSAGES from "empyreanui/constants/ERROR_MESSAGES.json";
import users from "empyreanui/models/Empyrean_users";
import bcrypt from "bcrypt";

export const validateInputs = async (body: {
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password: string;
}) => {
  const { firstname, lastname, username, email, password } = body;
  let status: number = HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const errors: {
    username?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
  } = {};
  if (!username) {
    errors.username = ERROR_MESSAGES.username_required;
  }
  if (!firstname) {
    errors.firstname = ERROR_MESSAGES.name_required;
  }
  if (!lastname) {
    errors.lastname = ERROR_MESSAGES.name_required;
  }
  if (!password) {
    errors.password = ERROR_MESSAGES.password_required;
  } else if (password.length < 8) {
    errors.password = ERROR_MESSAGES.password_lesser_er;
  } else if (password.length > 16) {
    errors.password = ERROR_MESSAGES.password_great_er;
  }
  if (Object.keys(errors).length > 0) {
    status = HTTP_STATUS.BAD_REQUEST;
    throw { ...errors, status };
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    return { ...body, password: hashedPassword };
  }
};
export const checkUserAndEmail = async (username: string, email: string) => {
  try {
    const errors: {
      username?: string;
      email?: string;
    } = {};
    let status: number = HTTP_STATUS.INTERNAL_SERVER_ERROR;
    const existingUser = await users.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      status = HTTP_STATUS.BAD_REQUEST;
      if (existingUser?.username === username) {
        errors.username = ERROR_MESSAGES.username_exists;
      }
      if (existingUser?.email === email) {
        errors.email = ERROR_MESSAGES.email_exists;
      }
      throw { ...errors, status };
    }
    return true;
  } catch (error: any) {
    throw { ...error, message: error.message };
  }
};
