async function getAllMovies() {

    fetch("./movies.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);//Confirms that data has loaded correctly
        
        // **INSERT 
        // ****CODE 
        // *****FOR 
        // ******CREATING 
        // *******CARDS

    })
    .catch (error => {
        console.error('Problem fetching:', error);
    });
}

async function getReleasedMovies() {

    fetch("./movies.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);//Confirms that data has loaded correctly
        
        // **INSERT 
        // ****CODE 
        // *****FOR 
        // ******CREATING 
        // *******CARDS

    })
    .catch (error => {
        console.error('Problem fetching:', error);
    });
}

async function getUpcomingMovies() {

    fetch("./movies.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);//Confirms that data has loaded correctly
        
        // **INSERT 
        // ****CODE 
        // *****FOR 
        // ******CREATING 
        // *******CARDS

    })
    .catch (error => {
        console.error('Problem fetching:', error);
    });
}

export {
    getAllMovies,
    getReleasedMovies,
    getUpcomingMovies
};