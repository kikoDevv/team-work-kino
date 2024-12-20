/**
 * @module create movie cards module
 * @author Marcus
 */

function createCard (url, title, addMovieCardTo) {

    // create wrapper to contain moviecard
    const movieWrapper = document.createElement('article');
    movieWrapper.classList.add('movieWrapper');

    //MovieImage
    const movieImage = document.createElement('img');
    movieImage.classList.add('movieImage');
    movieImage.alt = "";
    movieImage.src = url;
    // create header 2 for title
    const movieTitle = document.createElement('h2');
    movieTitle.innerHTML = title;

    // create button for movie cards
    const movieBtn = document.createElement('button');
    movieBtn.classList.add('movieBtn');

    // create span to append into movieBtn
    const movieSpan = document.createElement('span');
    movieSpan.classList.add('movieSpanBtn');
    movieSpan.innerHTML = 'Köp biljett';

    // Create i to add ticket icon into span
    const movieIcon = document.createElement('i');
    movieIcon.classList.add('fa-solid', 'fa-money-bill-wave');

    // append to index.hmtl
    //append elements to movieBtn
    movieBtn.append(movieSpan);
    movieBtn.append(movieIcon);

    //append to movieWrapper
    movieWrapper.append(movieImage);
    movieWrapper.append(movieTitle);
    movieWrapper.append(movieBtn);

    //append movieWrapper to body
    addMovieCardTo.append(movieWrapper);




}

//example how it should be used later
const containerMovieCard = document.querySelector('body');
createCard("urlAdress", "Movie Title", containerMovieCard);