import express from "express";
import path from "path";

const app = express();
const port = 5080;

app.set("view engine", "ejs");
//Berättar var alla ejs filer finns
app.set("views", path.join(path.resolve(), "views"));

// Servar statiska filer från public mappen
app.use(express.static(path.join(path.resolve(), "public")));

// Servar startsidan med dynamisk titel från EJS
app.get("/", (req, res) => {
  res.render("index.ejs", { title: "Välkommen till kino!" });
});

// Startar servern
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
