import {StringCalculator} from "./string-calculator";

describe('StringCalculator', () => {
    it('should return the sum of 2 numbers in the string', () => {
        expect(StringCalculator.add("1,2")).toBe(3);
        expect(StringCalculator.add("3,4")).toBe(7);
    });
});
