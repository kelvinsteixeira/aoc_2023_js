const utils = require('./utils.js');

const isNumber = (char) => {
    return !isNaN(char);
}

const getFirstAndLast = (line) => {
    let first_digit = null;
    let last_digit = null;

    for (let ch of line) {
        if (isNumber(ch)) {
            last_digit = ch;
            if (!first_digit) {
                first_digit = ch;
            }
        }
    }

    return first_digit + last_digit;
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

    return sum;
}

module.exports = {
    exec
}