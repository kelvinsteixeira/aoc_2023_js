const utils = require('./utils');

// Functions

const isNumber = (char) => {
    return !isNaN(char);
}

const isSymbol = (char) => {
    if (!isNumber(char) && char !== '.') {
        return true;
    }

    return false;
}

const hasSymbolAround = (startColumn, endColumn, currentRow, data) => {
    for (let row = currentRow - 1; row <= currentRow + 1; row++) {
        if (data[row] === undefined) {
            continue;
        }

        for (let column = startColumn - 1; column <= endColumn + 1; column++) {
            if (data[column] === undefined) {
                continue;
            }

            if (row === currentRow && column >= startColumn && column <= endColumn) {
                continue;
            }

            if (isSymbol(data[row][column])) {
                return true;
            }
        }
    }

    return false;
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
            if (isNumber(data[row][column])) {
                const startColumn = column;
                let number = ''

                while (isNumber(data[row][column])) {
                    number += data[row][column];
                    column++;
                }

                const endColumn = column - 1;

                if (hasSymbolAround(startColumn, endColumn, row, data)) {
                    sum += parseInt(number);
                }
            }
        }
    }

    return sum;
}

module.exports = {
    exec
}