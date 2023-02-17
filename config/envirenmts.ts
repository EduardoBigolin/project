import "dotenv/config";

export const CONFIG = {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  SALT_HASH: process.env.SALT_HASH,
  JWT_KEY: process.env.JWT_KEY,
};
