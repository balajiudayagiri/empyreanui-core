import users from "kodebloxui/models/Empyrean_users";
import mongoConnection from "kodebloxui/services/dbConnect";

export const updatePostActivity = async (
  userID: string,
  addkey: string,
  req_id: string
) => {
  try {
    await mongoConnection();
    const D = new Date();
    await users.findOneAndUpdate(
      { _id: userID },
      {
        $push: {
          [addkey]: req_id,
          user_logs: {
            event: addkey,
            description: `User posted ${addkey} at ${D.toString()}`,
            time: D,
          },
        },
      }
    );
    return;
  } catch (error: any) {
    console.error(`unable to update due to --> ${error}`);
  }
};
