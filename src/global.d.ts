// src/global.d.ts
declare namespace NodeJS {
  interface Global {
    mongoose: {
      conn: typeof import("mongoose") | null;
      promise: Promise<typeof import("mongoose")> | null;
    };
  }
}
