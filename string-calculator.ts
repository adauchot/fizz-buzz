export class StringCalculator {
    static add(numbers: string): number {
        const splitNumbers = numbers.split(",");
        const number1 = parseInt(splitNumbers[0]);
        const number2 = parseInt(splitNumbers[1]);
        return number1 + number2;
    }
}
