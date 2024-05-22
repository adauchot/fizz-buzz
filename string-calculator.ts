export class StringCalculator {
    static add(numbers: string): number {
        if (numbers === "") return 0;

        const negativeNumbersRegex = /-\d+/g;
        const negativeNumbers = numbers.match(negativeNumbersRegex);
        if (negativeNumbers && negativeNumbers.length > 0) {
            throw new Error(`Negatives are not allowed: ${negativeNumbers.join(",")}`);
        }

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

            numbers = numbers.slice(3 + rawDelimiterLength);
        }

        return numbers.split(delimiter)
            .filter(num => parseInt(num) <= 1000)
            .reduce((sum, num) => sum + parseInt(num), 0);
    }
}
