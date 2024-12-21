const moviesContainer = document.querySelector(".moviesContainer");
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
    createMovieCard("pics/1.jpeg", "new movies");
})








function createMovieCard(movieImg, movieName) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movieCard');
    movieCard.innerHTML = `
        <img class="movieImg" src="${movieImg}" alt="movie image not found">
        <p class="movieName">${movieName}</p>
        <button class="movieBtn">Buy ticket</button>
    `;
    moviesContainer.appendChild(movieCard);
}

