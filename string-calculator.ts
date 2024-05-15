export class StringCalculator {
    static add(numbers: string): number {
        if (numbers === "") return 0;

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
