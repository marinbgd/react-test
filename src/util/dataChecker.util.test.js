const { isDataArrayValid } = require('./dataChecker.util');

const array_1 = undefined;
const array_2 = null;
const array_3 = {};
const array_4 = [];
const array_5 = [1, 2, 3];


describe('dataChecker', () => {
    it('works fine for array_1', () => {
        expect(isDataArrayValid(array_1)).toBe(false);
    });

    it('works fine for array_2', () => {
        expect(isDataArrayValid(array_2)).toBe(false);
    });

    it('works fine for array_3', () => {
        expect(isDataArrayValid(array_3)).toBe(false);
    });

    it('works fine for array_4', () => {
        expect(isDataArrayValid(array_4)).toBe(false);
    });

    it('works fine for array_5', () => {
        expect(isDataArrayValid(array_5)).toBe(true);
    });
});
