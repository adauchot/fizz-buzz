export class StringCalculator {
    static add(numbers: string): number {
        return numbers.split(",")
            .reduce((sum, num) => sum + parseInt(num), 0);
    }
}
