import { movieCard } from "./movies.js";

//append one movie card to figure element with class movies (should maybe be changed later)
// TODO: Read url, title from json file.
// This needs to be done after issue #81
const figureCard = document.querySelector('figure.movies');
movieCard.createMovieCard("https://placecats.com/640/480", "Avatar", figureCard);
movieCard.createMovieCard("https://placecats.com/640/480", "Film2", figureCard);
