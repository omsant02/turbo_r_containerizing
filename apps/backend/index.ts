import express from "express";
import { prismaClient } from "db/client";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await prismaClient.user.findMany();
    res.json({
      users,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post("/user", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ errer: "Username and password are required" });
    return;
  }

  const result = await prismaClient.user.create({
    data: {
      username,
      password,
    },
  });

  res.json(result)

});

app.listen(8080, () => {
  console.log("backend is running on port 8080");
});
