const { app } = require("./app");

app.listen(process.env.PORT, async () => {
  console.log(`✔ API running on port ${process.env.PORT}`);
});