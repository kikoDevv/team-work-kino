import express from "express";
import path from "path";
import morgan from "morgan";
import fetch from "node-fetch";

const app = express();
const port = 5080;

app.set("view engine", "ejs");
//Berättar var alla filer finns
app.set("views", path.join(path.resolve(), "views"));

// Servar statiska filer från public mappen
app.use(express.static(path.join(path.resolve(), "public")));

//Middleware som loggar nice info :)
app.use(morgan("tiny"));

// fetchar från API
app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://plankton-app-xhkom.ondigitalocean.app/api/movies"
    );
    const movies = await response.json();
    console.log(movies);
    res.render("index.ejs", { title: "Välkommen till kino!" });
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).send("Could not fetch movies");
  }
});

// Startar servern
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
