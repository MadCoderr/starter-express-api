import { AUTH, DB } from "./firebase.js";
import express, { json } from "express";

const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.send("Atlas Training Platform server");
});

// check user role
app.post("/check-user-role", async (req, res) => {
  try {
    const { email, role } = req.body;

    const user = await AUTH.getUserByEmail(email);

    if (user.customClaims?.role === role) {
      res.status(200);
      res.json(true);
    } else {
      res.status(200);
      res.json(false);
    }
  } catch (e) {
    throw new Error(e.message);
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`listening on PORT http://localhost:${PORT}`)
);
