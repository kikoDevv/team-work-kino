async function getMovies() {

    fetch("./movies.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data[5].id);
        const movies = [];
        data.forEach(element => {
            movies.push(element);
        });
        return movies;
    })
    .catch (error => {
        console.error('Problem fetching:', error);
    });
}