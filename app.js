const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => res.send("hi"));

app.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("your data is received successfully");
});

const server = app.listen(port, () =>
  console.log(`App is listening on port ${port}!`),
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
