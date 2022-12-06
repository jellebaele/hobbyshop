const {
  MONGO_USERNAME = 'admin',
  MONGO_PASSWORD = 'secret',
  MONGO_DOMAIN = 'localhost',
  MONGO_PORT = 27018,
  MONGO_INITDB_DATABASE = 'hobbyshop',
} = process.env;

export const {
  MONGO_CONNECTION_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_DOMAIN}:${MONGO_PORT}/${MONGO_INITDB_DATABASE}`,
} = process.env;
