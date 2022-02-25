const {shuffleArray} = require('./utils')

describe('shuffleArray tests', () => {
    test("shuffleArray should return typeof Array", () => {
        expect(Array.isArray(shuffleArray([1,2,3,4,5]))).toBe(true);
    });

    test("shuffleArray should return an array with the correct length", () => {
        expect(shuffleArray([1,2,3,4,5])).toHaveLength(5);
    });
})