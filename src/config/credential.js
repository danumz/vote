const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  MONGO_DB: {
    USERNAME_DB_MONGO: process.env.USERNAME_DB_MONGO,
    PASSWORD_DB_MONGO: process.env.PASSWORD_DB_MONGO,
    HOSTNAME_MONGO: process.env.HOSTNAME_MONGO,
    PORT_DB_MONGO: process.env.PORT_DB_MONGO,
    AUTHSOURCE_DB_MONGO: process.env.AUTHSOURCE_DB_MONGO,
    COLLECTION_DB_MONGO: process.env.COLLECTION_DB_MONGO,
    DB_NAME_MONGO: process.env.DB_NAME_MONGO,
  },
  AMQP_SERVER: process.env.AMQP_SERVER,
  DATABASE: {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT,
    DB_PORT: process.env.DB_PORT,
    NODE_ENV: process.env.NODE_ENV,
  },
  REDIS: {
    PORT: process.env.REDIS_PORT,
    HOST: process.env.REDIS_HOST,
    PASSWORD: process.env.REDIS_PASSWORD,
  },
  API_BASE_URL: process.env.API_BASE_URL,
  SHOPIFY: {
    SHOP_NAME: process.env.SHOP_NAME,
    API_SHOPIFY: process.env.API_SHOPIFY,
    TOKEN_SHOPIFY: process.env.TOKEN_SHOPIFY,
    URL_SHOP: process.env.URL_SHOP,
  },
};
