const {shuffleArray} = require('./utils')

describe('shuffleArray tests', () => {
    test("shuffleArray should return typeof Array", () => {
        expect(typeof shuffleArray([1,2,3,4,5])).toBe("object"); //array
    });

    test("shuffleArray should return an array with the correct length", () => {
        expect(shuffleArray([1,2,3,4,5])).toHaveLength(5);
    });
})