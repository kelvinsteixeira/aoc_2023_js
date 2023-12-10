const utils = require('./utils.js');

const isNumber = (char) => {
    return !isNaN(char);
}

const getFirstAndLast = (line) => {
    let firstIndex = 0;
    let lastIndex = line.length - 1;

    let first = null;
    let last = null;

    while (firstIndex < line.length) {
        if (!first && isNumber(line[firstIndex])) {
            first = line[firstIndex];
        }

        if (!last && isNumber(line[lastIndex])) {
            last = line[lastIndex];
        }

        if (first && last) {
            break;
        }

        firstIndex++;
        lastIndex--;
    }

    return (first ?? '') + (last ?? '');
}

function exec() {
    const lines = utils.input.split(/\r?\n/);

    let sum = 0;
    lines.forEach((line) => {
        let result = getFirstAndLast(line);
        if (result) {
            sum += parseInt(result);
        }
    });

    console.log('(Day 1 pt 1) Result is: ', sum);
}

module.exports = {
    exec
}