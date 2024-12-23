import '@testing-library/jest-dom';
import { movieCard } from "../movies.js";

/**
 * Might need to run following npm installs to run
 * npm install --save-dev jest
 * npm install --save-dev @testing-library/jest-dom
 * npm install --save-dev jest-environment-jsdom
 */

// test for minutesHoursConverter()
describe("Converting minutes string to string in 'h timme m minuter'", () => {
    test("Test minutesToHoursConverter (argument 0 min) '", () => {
        const resultString = movieCard.minutesToHoursConverter('0 min');
        expect(resultString).toBe("0 timme 0 minuter");
    });

    test("Test minutesToHoursConverter with small values (argument 57 min) '", () => {
        const resultString = movieCard.minutesToHoursConverter('57 min');
        expect(resultString).toBe("0 timme 57 minuter");
    });

    test("Test minutesToHoursConverter with higher values(argument 189 min) '", () => {
        const resultString = movieCard.minutesToHoursConverter('189 min');
        expect(resultString).toBe("3 timme 9 minuter");
    });

    test("Test minutesToHoursConverter with extremely high values(argument 189 min) '", () => {
        const resultString = movieCard.minutesToHoursConverter('9999 min');
        expect(resultString).toBe("166 timme 39 minuter");
    });
});

// test append dom-element createMovieCard()
describe("Tests to check that every dom-element is implemented from createMovieCard function", () => {
    let container;

    beforeEach(() => {
        // Creates a empty div where the createMovieCard elements will be appended.
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // Clears dom after every test
        document.body.innerHTML = '';
    });

    test('should create a movie card with the correct elements and classes', () => {
        const movieId = 'movvieId1';
        const url = 'https://example.com/movie.jpg';
        const title = 'An Awesome Movie';

        // Run function
        movieCard.createMovieCard(movieId, url, title, container);

        // Verify that moviWrapper was created
        const movieWrapper = container.querySelector('.movieWrapper');
        expect(movieWrapper).toBeInTheDocument();
        expect(movieWrapper.id).toBe(movieId);

        // Verify that img element is correctly created
        const movieImage = movieWrapper.querySelector('.movieImage');
        expect(movieImage).toBeInTheDocument();
        expect(movieImage.src).toBe(url);
        expect(movieImage.alt).toBe('a movie');

        // Verify that movieTitle is correctly appended to dom
        const movieTitle = movieWrapper.querySelector('.movieCardHeader');
        expect(movieTitle).toBeInTheDocument();
        expect(movieTitle.textContent).toBe(title);

        // Verify that movieBtn is added
        const movieBtn = movieWrapper.querySelector('.movieBtn');
        expect(movieBtn).toBeInTheDocument();

        const movieSpan = movieBtn.querySelector('.movieSpanBtn');
        expect(movieSpan).toBeInTheDocument();
        expect(movieSpan.textContent).toBe('Köp biljett');

        const movieIcon = movieBtn.querySelector('.fa-money-bill-wave');
        expect(movieIcon).toBeInTheDocument();
    });
});
