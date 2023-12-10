const utils = require('./utils.js');

const isNumber = (char) => {
    return !isNaN(char);
}

const getFirstAndLast = (line) => {
    let firstIndex = 0;
    let lastIndex = line.length - 1;

    let firstNumber = null;
    let lastNumber = null;


    let literals = []
    for (let i = 0; i < line.length; i++) {
        for (let num of utils.numberNames) {
            if (line.substr(i, num.length) === num) {
                literals.push({ index: i, literal: num });
            }
        }
    }

    let firstLiteral = literals[0];
    let lastLiteral = literals[literals.length - 1];

    while (firstIndex < line.length) {
        if (!firstNumber) {
            if (isNumber(line[firstIndex])) {
                if (firstLiteral && firstLiteral.index < firstIndex) {
                    firstNumber = utils.nameToNumber[firstLiteral.literal];
                } else {
                    firstNumber = line[firstIndex];
                }

            }
        }

        if (!lastNumber) {
            if (isNumber(line[lastIndex])) {
                if (lastLiteral && lastLiteral.index > lastIndex) {
                    lastNumber = utils.nameToNumber[lastLiteral.literal];
                } else {
                    lastNumber = line[lastIndex];
                }
            }
        }

        if (firstNumber && lastNumber) {
            break;
        }

        firstIndex++;
        lastIndex--;
    }

    firstNumber = firstNumber ?? (firstLiteral ? utils.nameToNumber[firstLiteral.literal] : lastLiteral ? utils.nameToNumber[lastLiteral.literal] : null);
    lastNumber = lastNumber ?? (lastLiteral ? utils.nameToNumber[lastLiteral.literal] : firstLiteral ? utils.nameToNumber[firstLiteral.literal] : null);

    return (firstNumber ?? '') + (lastNumber ?? '');
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

    console.log('(Day 1 pt 2) Result is: ', sum);
}

module.exports = {
    exec
}