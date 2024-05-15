export class StringCalculator {
    static add(numbers: string): number {
        if (numbers === "") return 0;

        if (numbers.startsWith("//")) {
            const delimiter = numbers[2];
            numbers = numbers.slice(4);
            return numbers.split(delimiter)
                .reduce((sum, num) => sum + parseInt(num), 0);
        }

        return numbers.split(/[,\n]/)
            .reduce((sum, num) => sum + parseInt(num), 0);
    }
}
