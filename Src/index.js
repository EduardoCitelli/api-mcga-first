const { app } = require("./app");
// const { connect } = require("./data/db/mongodb");

app.listen(process.env.PORT, async () => {
//   await connect();
  console.log(`✔ API running on port ${process.env.PORT}`);
});