require("dotenv").config();
const express = require("express");
const createShowsRouter = require("./routes/shows");
const createUserRouter = require("./routes/users");
const app = express();
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 3001;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const client = new MongoClient(process.env.MONGO_URI, {
  useUnifiedTopology: true,
});

async function main() {
  try {
    await client.connect();

    const database = client.db(process.env.MONGO_NAME);

    app.use("/api/shows", createShowsRouter(database));
    app.use("/api/user", createUserRouter(database));

    app.listen(port, () => {
      console.log("listening on 3001");
    });
  } catch (error) {
    console.log(error);
  }
}

main();
