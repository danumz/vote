const Redis = require("ioredis");
const dotenv = require("dotenv");

dotenv.config();
const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  // password: process.env.REDIS_PASSWORD,
  // tls: {},
});
const getKey = async (key) => {
  const get = await redis.get(key);
  return JSON.parse(get);
};
const setValue = ({ key, data = {} }) => {
  return redis.set(key, JSON.stringify(data));
};

module.exports = {
  setValue,
  getKey,
};
