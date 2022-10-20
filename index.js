const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Yo!");
});

app.post("/create-user", (req, res) => {
  const { username, email } = req.body;

  res.status(200).json({ username, email });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`listening on PORT http://localhost:${PORT}`)
);
