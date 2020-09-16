const express = require("express");
const createShowsRouter = require("./routes/shows");
const app = express();
const port = 3001;

async function main() {
  app.listen(port, () => {
    console.log("listening on 3001");
  });

  app.use("/api/shows", createShowsRouter());
}

main();
