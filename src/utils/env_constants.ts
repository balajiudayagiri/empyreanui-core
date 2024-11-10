type EnvVariables = {
  MONGODB_URI: string;
  MY_EMAIL: string;
  MY_PASSCODE: string;
  INSTAGRAM: string;
  DISCORD: string;
  JWT_SECRET: string;
  MY_SECRET_TOKEN: string;
  //   FIGMA_API_TOKEN: string;
  //   FIGMA_FILE_KEY: string;
  GROQ_API_KEY: string;
  //   GOOGLE_API_KEY: string;
  MODAL_TO_USE: string;
  SITE_URL: string;
};

export const ENV: EnvVariables = {
  MONGODB_URI: process.env.MONGODB_URI as string,

  MY_EMAIL: process.env.MY_EMAIL as string,
  MY_PASSCODE: process.env.MY_PASSCODE as string,

  INSTAGRAM: process.env.INSTAGRAM as string,
  DISCORD: process.env.DISCORD as string,

  JWT_SECRET: process.env.JWT_SECRET as string,
  MY_SECRET_TOKEN: process.env.MY_SECRET_TOKEN as string,

  //   FIGMA_API_TOKEN: process.env.FIGMA_API_TOKEN as string,
  //   FIGMA_FILE_KEY: process.env.FIGMA_FILE_KEY as string,

  GROQ_API_KEY: process.env.GROQ_API_KEY as string,

  //   GOOGLE_API_KEY: process.env.GOOGLE_API_KEY as string,

  MODAL_TO_USE: process.env.MODAL_TO_USE as string,
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL as string,
};
