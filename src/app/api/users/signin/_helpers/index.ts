import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";
import ERROR_MESSAGES from "empyreanui/constants/ERROR_MESSAGES.json";
import users from "empyreanui/models/Empyrean_users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * Validates the input data for user login.
 *
 * This function checks if the provided email and password are present.
 * If either field is missing, it throws an error with appropriate messages and HTTP status.
 * If validation passes, it returns the validated input data.
 *
 * @param {Object} body - The input data to be validated.
 * @param {string} body.email - The email address of the user. Must be provided.
 * @param {string} body.password - The password of the user. Must be provided.
 * @throws {Object} Throws an error object if validation fails, containing:
 * - `email` (string): Error message if the email is missing.
 * - `password` (string): Error message if the password is missing.
 * - `status` (number): HTTP status code indicating the type of error.
 * @returns {Promise<Object>} A promise that resolves to the validated input data if validation is successful.
 */
export const validateInputs = async (body: {
  email: string;
  password: string;
}): Promise<object> => {
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

/**
 * Validates the user's email and password and generates an authentication token if successful.
 *
 * This function performs the following actions:
 * 1. Finds the user in the database by email.
 * 2. Compares the provided password with the stored hashed password.
 * 3. Checks if the user is verified.
 * 4. Generates a JSON Web Token (JWT) if the email and password are valid and the user is verified.
 * 5. Throws appropriate errors with messages and HTTP status codes if validation or authentication fails.
 *
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @throws {Object} Throws an error object if authentication fails, containing:
 * - `email` (string): Error message if the email is invalid or not found.
 * - `password` (string): Error message if the password is incorrect.
 * - `status` (number): HTTP status code indicating the type of error.
 * @returns {Promise<string>} A promise that resolves to the authentication token if the user is authenticated successfully.
 */
export const validateUser = async (email: string, password: string): Promise<string> => {
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
          throw { ...errors, status };
        }
      } else {
        errors.password = "Password incorrect";
        status = HTTP_STATUS.BAD_REQUEST;
        throw { ...errors, status };
      }
    } else {
      errors.email = ERROR_MESSAGES.email_invalid;
      status = HTTP_STATUS.NOT_FOUND;
      throw { ...errors, status };
    }
  } catch (error: any) {
    throw { ...error, error: error.message, status };
  }
};
