import users from "kodebloxui/models/Empyrean_users";
import { NextRequest, NextResponse } from "next/server";
import HTTP_STATUS from "kodebloxui/constants/HTTP_STATUS.json";
import mongoConnection from "kodebloxui/services/dbConnect";
import tokenValidator from "kodebloxui/utils/tokenValidator";

/**
 * Extracts and formats the activity log based on the provided activity type.
 *
 * This function creates a standardized log entry based on the activity type. It returns an object containing:
 * - `event` (string): The type of event, derived from the `activity` parameter.
 * - `description` (string): A description of the event, including the current date and time.
 * - `time` (Date): The timestamp of when the event occurred.
 *
 * @param {number|string} activity - The activity type, which can be a number (e.g., 1 for login) or a string (e.g., "login").
 * @param {Object} [createActivity] - Optional parameter to provide a custom event and description.
 * @param {string} createActivity.event - The custom event name.
 * @param {string} createActivity.description - The custom event description.
 * @returns {Object} An object containing:
 * - `event` (string): The type of event.
 * - `description` (string): Description of the event.
 * - `time` (Date): Timestamp of the event.
 */
const extractActivity = (
  activity: number | string,
  createActivity?: { event: string; description: string }
): object => {
  const D = new Date();

  switch (activity) {
    case 1:
    case "login":
      return {
        event: "login",
        description: `User logged in at ${D.toString()}`,
        time: D,
      };

    case 2:
    case "register":
      return {
        event: "register",
        description: `User registered at ${D.toString()}`,
        time: D,
      };

    default:
      return {
        event: createActivity?.event || activity,
        description:
          createActivity?.description || `${activity} at ${D.toString()}`,
        time: D,
      };
  }
};

/**
 * Handles POST requests to add an activity log entry for a user.
 *
 * This function performs the following actions:
 * 1. Establishes a connection to the MongoDB database.
 * 2. Parses the request body to retrieve the activity type.
 * 3. Extracts and formats the activity log entry using the `extractActivity` function.
 * 4. Validates the user's token to get the user ID.
 * 5. Updates the user's document in the database to append the new activity log entry.
 * 6. Returns a JSON response indicating that the log entry was added successfully.
 * 7. Handles and returns errors with appropriate messages and HTTP status codes if any part of the process fails.
 *
 * On success, it returns a JSON response with a success message and HTTP status 200, along with the updated user document.
 * On error, it returns a JSON response with an error message and an appropriate HTTP status code.
 *
 * @param {NextRequest} request - The Next.js request object containing the HTTP request information.
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response object containing:
 * - `message` (string): A message indicating that the log entry was added.
 * - The updated user document with the new activity log.
 * @throws {Object} Throws an error object if any part of the process fails, including:
 * - `status` (number): HTTP status code indicating the type of error.
 * - `message` (string): A descriptive error message.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Establish a connection to the MongoDB database
    await mongoConnection();

    // Parse the request body to retrieve the activity type
    const body = await request.json();
    const activity = extractActivity(body.activity);

    // Validate the user's token and retrieve the user ID
    const { _id } = await tokenValidator(request);

    // Update the user's document with the new activity log entry
    const addLog = await users.findOneAndUpdate(
      {
        _id,
      },
      { $push: { user_logs: activity } },
      { new: true }
    );

    // Return a JSON response with a success message and the updated user document
    return NextResponse.json(
      { message: "added log", ...addLog },
      { status: HTTP_STATUS.OK }
    );
  } catch (error: any) {
    // Extract status and other details from the error object
    const { status = HTTP_STATUS.INTERNAL_SERVER_ERROR, ...err } = error;

    // Return an error response with the appropriate status code and message
    return NextResponse.json(
      { message: error.message, ...err },
      { status: status }
    );
  }
}
