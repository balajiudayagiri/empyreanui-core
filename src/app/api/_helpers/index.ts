import users from "empyreanui/models/Empyrean_users";
import mongoConnection from "empyreanui/services/dbConnect";

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
    console.log(`unable to update due to --> ${error}`);
  }
};
