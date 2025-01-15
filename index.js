import express from "express";

const app = express();
const port = 5080;

app.get("/", (req, res) => {
  res.send("Tjenare");
});

// Startar servern
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
