const app = require("./app");
const connectWithDb = require("./config/db");
require("dotenv").config();

connectWithDb();

app.listen(process.env.PORT, () =>
  console.log(`server running at PORT:${process.env.PORT}`)
);
