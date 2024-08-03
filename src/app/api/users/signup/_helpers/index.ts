import HTTP_STATUS from "empyreanui/constants/HTTP_STATUS.json";
import ERROR_MESSAGES from "empyreanui/constants/ERROR_MESSAGES.json";
import users from "empyreanui/models/Empyrean_users";
import bcrypt from "bcrypt";

/**
 * Validates and hashes user input data.
 *
 * This function performs validation on user input data and hashes the password if validation passes.
 * It checks for the presence and validity of `username`, `firstname`, `lastname`, and `password`.
 * If validation fails, it throws an error with appropriate messages and HTTP status.
 * If validation succeeds, it returns the input data with the password hashed.
 *
 * @param {Object} body - The input data for validation and processing.
 * @param {string} [body.username] - The username of the user.
 * @param {string} [body.firstname] - The first name of the user.
 * @param {string} [body.lastname] - The last name of the user.
 * @param {string} [body.email] - The email address of the user.
 * @param {string} body.password - The password of the user. Must be between 8 and 16 characters long.
 * @throws {Object} Throws an error object if validation fails, containing:
 * - `username` (string): Error message if the username is missing or invalid.
 * - `firstname` (string): Error message if the first name is missing.
 * - `lastname` (string): Error message if the last name is missing.
 * - `password` (string): Error message if the password is missing or does not meet length requirements.
 * - `status` (number): HTTP status code indicating the type of error.
 * @returns {Promise<Object>} A promise that resolves to the input data with the password hashed if validation is successful.
 */
export const validateInputs = async (body: {
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password: string;
}): Promise<object> => {
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

/**
 * Checks if a username or email already exists in the database.
 *
 * This function queries the database to determine if a user with the specified `username` or `email` already exists.
 * If a match is found, it throws an error with appropriate messages indicating which field is already taken.
 * If no match is found, it returns true, indicating that the username and email are available.
 *
 * @param {string} username - The username to check for existence in the database.
 * @param {string} email - The email address to check for existence in the database.
 * @throws {Object} Throws an error object if a username or email already exists, containing:
 * - `username` (string): Error message if the username is already taken.
 * - `email` (string): Error message if the email is already taken.
 * - `status` (number): HTTP status code indicating the type of error.
 * @returns {Promise<boolean>} A promise that resolves to true if the username and email are available.
 */
export const checkUserAndEmail = async (
  username: string,
  email: string
): Promise<boolean> => {
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
