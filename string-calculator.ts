export class StringCalculator {
    static add(numbers: string): number {
        if (numbers === "") return 0;

        const negativeNumbers = StringCalculator.hasNegativeNumbers(numbers);
        if (negativeNumbers && negativeNumbers.length > 0) {
            throw new Error(`Negatives are not allowed: ${negativeNumbers.join(",")}`);
        }

        const delimiting = StringCalculator.findDelimiter(numbers);
        let delimiter = delimiting.delimiter;

        if (delimiting.rawDelimiterLength > 0) {
            numbers = numbers.slice(3 + delimiting.rawDelimiterLength);
        }

        return numbers.split(delimiter)
            .filter(num => parseInt(num) <= 1000)
            .reduce((sum, num) => sum + parseInt(num), 0);
    }

    private static findDelimiter(numbers: string) {
        let delimiter = /[,\n]/;

        const delimiterRegex = /\/\/(.+)\n/;
        const matchingRegex = delimiterRegex.exec(numbers);

        if (matchingRegex && matchingRegex.length > 0) {
            let rawDelimiter = matchingRegex[1];
            const rawDelimiterLength = rawDelimiter.length;

            const rawDelimiterHasBrackets = rawDelimiter.startsWith('[') && rawDelimiter.endsWith(']');

            if (rawDelimiterHasBrackets) {
                rawDelimiter = rawDelimiter.slice(1, -1);
                const delimiters = rawDelimiter.split('][');
                delimiter = new RegExp(`[${delimiters.join('')}]+`);
            } else {
                delimiter = new RegExp(`[${rawDelimiter}]`);
            }

            return {delimiter, rawDelimiterLength};
        }

        return {delimiter, rawDelimiterLength: 0};
    }

    private static hasNegativeNumbers(numbers: string) {
        const negativeNumbersRegex = /-\d+/g;
        return numbers.match(negativeNumbersRegex);
    }
}
