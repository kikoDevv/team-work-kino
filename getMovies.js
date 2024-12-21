//Function that adds all movies to an array
async function getAllMovies(array) {

    fetch("./movies.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(element => {
            array.push(element);
        });
        console.log(array);//Confirms that data has loaded correctly
    })
    .catch (error => {
        console.error('Problem fetching:', error);
    });
}

//Function that adds released movies to an array
async function getReleasedMovies(array) {

    fetch("./movies.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(element => {
            if (!element.comingSoon) //Checking if comingSoon is false
            array.push(element);
        });
        console.log(array); //Confirms that data has loaded correctly
    })
    .catch (error => {
        console.error('Problem fetching:', error);
    });
}

//Function that adds upcoming movies to an array
async function getUpcomingMovies(array) {

    fetch("./movies.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(element => {
            if (element.comingSoon) //Checking if comingSoon is true
            array.push(element);
        });
        console.log(array); //Confirms that data has loaded correctly

    })
    .catch (error => {
        console.error('Problem fetching:', error);
    });
}

//Example
/* const movies = [], 
released = [], 
upcoming = [];
getAllMovies(movies);
getReleasedMovies(released);
getUpcomingMovies(upcoming); */

export {
    getAllMovies,
    getReleasedMovies,
    getUpcomingMovies
};