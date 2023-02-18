import "dotenv/config";

export default {
  DB_NAME: process.env.DB_NAME as string,
  DB_USER: process.env.DB_USER as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  SALT_HASH: parseInt(process.env.SALT_HASH as string),
  JWT_KEY: process.env.JWT_KEY as string,
  PORT_SERVER: parseInt(process.env.PORT_SERVER as string),
};
