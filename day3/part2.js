const utils = require('./utils');

// Functions

const isNumber = (char) => !isNaN(char);
const isGear = (char) => char === '*';

const searchNestedValues = (row, column, data) => {

    let results = [];
    if (row >= 0) {
        if (isNumber(data[row][column])) {
            while (isNumber(data[row][column] || column > 0)) {
                column--;
            }

            column = column < 0 ? 0 : column + 1;
            let number = '';
            while (isNumber(data[row][column])) {
                number += data[row][column];
                column++;
            }

            results.push(parseInt(number));
        } else {
            let numberRight = checkRight(row, column, data);
            let numberLeft = checkLeft(row, column, data);

            if (numberRight > 0) {
                results.push(numberRight);
            }

            if (numberLeft > 0) {
                results.push(numberLeft);
            }
        }
    }

    return results;
}

const checkRight = (row, column, data) => {
    column = column + 1;
    if (column < data[row].length && isNumber(data[row][column])) {
        let number = '';
        while (isNumber(data[row][column])) {
            number += data[row][column];
            column++;
        }

        return parseInt(number);
    }

    return 0;
}

const checkLeft = (row, column, data) => {
    column = column - 1;
    if (column > 0 && isNumber(data[row][column])) {
        let number = '';
        while (isNumber(data[row][column])) {
            number += data[row][column];
            column--;
        }

        return parseInt(number.split('').reverse().join(''));
    }

    return 0;
}

const getGearRation = (row, column, data) => {

    const topLineValues = searchNestedValues(row - 1, column, data);
    const bottomLineValues = searchNestedValues(row + 1, column, data);
    const middleLineValues = searchNestedValues(row, column, data);

    let values = [
        ...topLineValues,
        ...bottomLineValues,
        ...middleLineValues
    ];

    values = values.filter(value => value > 0);

    if (values.length === 2) {
        return values[0] * values[1];
    }

    return 0;
}

// Main
function exec() {
    const lines = utils.input.split(/\r?\n/);
    const rows = lines.length;
    const columns = lines[0].length;
    const data = lines.map(line => line.split(''))

    let sum = 0;
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            if (isGear(data[row][column])) {
                const gearRation = getGearRation(row, column, data);
                if (gearRation > 0) {
                    sum += gearRation;
                }
            }
        }
    }

    console.log('(Day 3 pt 2) Result is: ', sum);
}

module.exports = {
    exec
}