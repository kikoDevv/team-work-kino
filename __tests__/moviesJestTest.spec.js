import { movieCard } from "../movies.js";

describe("Converting minutes string to string in 'h timme m minuter'", () => {
    test("Test minutesToHoursConverter (argument 0 min) '", () => {
        const resultString = movieCard.minutesToHoursConverter('0 min');
        expect(resultString).toBe("0 timme 0 minuter");
    })

    test("Test minutesToHoursConverter with small values (argument 57 min) '", () => {
        const resultString = movieCard.minutesToHoursConverter('57 min');
        expect(resultString).toBe("0 timme 57 minuter");
    })

    test("Test minutesToHoursConverter with higher values(argument 189 min) '", () => {
        const resultString = movieCard.minutesToHoursConverter('189 min');
        expect(resultString).toBe("3 timme 9 minuter");
    })

    test("Test minutesToHoursConverter with extremely high values(argument 189 min) '", () => {
        const resultString = movieCard.minutesToHoursConverter('9999 min');
        expect(resultString).toBe("166 timme 39 minuter");
    })
})