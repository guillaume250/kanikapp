module.exports = {
  server: {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    uri: process.env.SERVER_URI
  },
  databases: {
    mongodb: {
      db: process.env.MONGO_URI
    }
  },
  token: {
    secret: process.env.SECRET,
    expiration: process.env.EXP
  }
};
