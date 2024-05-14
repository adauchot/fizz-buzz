export class StringCalculator {
    static add(numbers: string): number {
        if (numbers === "") return 0;

        return numbers.split(",")
            .reduce((sum, num) => sum + parseInt(num), 0);
    }
}
