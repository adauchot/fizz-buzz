import {FizzBuzz} from "./fizz-buzz";

describe('FizzBuzz', () => {
    it('should return FizzBuzz', () => {
        expect(FizzBuzz.fizzBuzz(15)).toBe("FizzBuzz");
    });

    it('should return Fizz', () => {
        expect(FizzBuzz.fizzBuzz(3)).toBe("Fizz");
    });

    it('should return Buzz', () => {
        expect(FizzBuzz.fizzBuzz(5)).toBe("Buzz");
    });

    it('should return 4', () => {
        expect(FizzBuzz.fizzBuzz(4)).toBe(4);
    });

    it('should return 31', () => {
        expect(FizzBuzz.fizzBuzz(31)).toBe(31);
    });
});
