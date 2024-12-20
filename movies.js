/**
 * @module create movie cards module
 * @author Marcus
 */

function createCard () {

    //TODO: Create wrapper contain everything per
    // create wrapper to contain moviecard
    const movieWrapper = document.createElement('article');
    movieWrapper.classList.add('movieWrapper');

    //MovieImage
    const movieImage = document.createElement('img');
    // create header 2 for title
    const movieTitle = document.createElement('h2');
    movieTitle.innerHTML = 'Should be added through json';

    // create button for movie cards
    const movieBtn = document.createElement('button');
    // added class "movieBtn" should be used to style everything TODO: delete this comment after style
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
    document.querySelector('body').append(movieWrapper)




}

createCard();