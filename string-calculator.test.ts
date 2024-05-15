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

    it('should return the sum of 3 numbers in the string', () => {
        expect(StringCalculator.add("1,2,3")).toBe(6);
        expect(StringCalculator.add("4,5,6")).toBe(15);
    });

    it('should handle new lines between numbers', () => {
        expect(StringCalculator.add("1\n2,3")).toBe(6);
        expect(StringCalculator.add("4\n5\n6")).toBe(15);
    });

    it ('should handle different delimiters', () => {
        expect(StringCalculator.add("//;\n1;2")).toBe(3);
        expect(StringCalculator.add("//+\n1+2+3")).toBe(6);
    });

    it('should handle negative numbers', () => {
        expect(() => StringCalculator.add("-1,2")).toThrow("Negatives are not allowed: -1");
        expect(() => StringCalculator.add("2,-4,3,-5")).toThrow("Negatives are not allowed: -4,-5");
    });

    it('should ignore numbers greater than 1000', () => {
        expect(StringCalculator.add("1001,2")).toBe(2);
        expect(StringCalculator.add("1000,2")).toBe(1002);
    });
});
