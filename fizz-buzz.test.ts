import {FizzBuzz} from "./fizz-buzz";

describe('FizzBuzz', () => {
    it('should return FizzBuzz', () => {
        expect(FizzBuzz.fizzBuzz(15)).toBe("FizzBuzz");
    });

    it('should return Fizz', () => {
        expect(FizzBuzz.fizzBuzz(3)).toBe("Fizz");
        expect(FizzBuzz.fizzBuzz(18)).toBe("Fizz");
    });

    it('should return Buzz', () => {
        expect(FizzBuzz.fizzBuzz(5)).toBe("Buzz");
        expect(FizzBuzz.fizzBuzz(20)).toBe("Buzz");
    });

    it('should return the number', () => {
        expect(FizzBuzz.fizzBuzz(4)).toBe(4);
        expect(FizzBuzz.fizzBuzz(7)).toBe(7);
        expect(FizzBuzz.fizzBuzz(31)).toBe(31);
    });
});
