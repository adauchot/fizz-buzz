import {StringCalculator} from "./string-calculator";

describe('StringCalculator', () => {
    it('should return the sum of 2 numbers in the string', () => {
        expect(StringCalculator.add("1,2")).toBe(3);
        expect(StringCalculator.add("3,4")).toBe(7);
    });

    it('should return the number in the string', () => {
        expect(StringCalculator.add("5")).toBe(5);
        expect(StringCalculator.add("6")).toBe(6);
    });

    it('should return 0 for an empty string', () => {
        expect(StringCalculator.add("")).toBe(0);
    });
});
