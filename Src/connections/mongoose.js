const mongoose = require("mongoose");
const { CONNECTION_STRING } = process.env;

mongoose
  .connect(CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMs: 30000,
    keepAlive: true,
    retryWrites: false,
  })
  .then(() => {
    console.log(`🍃 Connected to MongoDB database`);
  })
  .catch((err) => {
    console.log(CONNECTION_STRING);
    console.error(err);
  });

process.on("uncaughtException", (error) => {
  console.error(error);
  mongoose.disconnect();
});
