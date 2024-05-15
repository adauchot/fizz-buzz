export class StringCalculator {
    static add(numbers: string): number {
        if (numbers === "") return 0;

        const negativeNumbersRegex = /-\d+/g;
        const negativeNumbers = numbers.match(negativeNumbersRegex);
        if (negativeNumbers && negativeNumbers.length > 0) {
            throw new Error(`Negatives are not allowed: ${negativeNumbers.join(",")}`);
        }

        let delimiter = /[,\n]/;

        const delimiterRegex = /\/\/(.)\n/;
        const matchingRegex = delimiterRegex.exec(numbers);

        if (matchingRegex && matchingRegex.length > 0) {
            delimiter = new RegExp(`[${matchingRegex[1]}]`);
            numbers = numbers.slice(4);
        }

        return numbers.split(delimiter)
            .reduce((sum, num) => sum + parseInt(num), 0);
    }
}
