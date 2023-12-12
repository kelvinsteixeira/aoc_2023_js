const utils = require('./utils.js');

const is_num = (char) => {
    return !isNaN(char);
}

const find_num = (line) => {
    let first_digit = null;
    let last_digit = null;

    for (let ch of line) {
        if (is_num(ch)) {
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
        let line_num = find_num(line);
        if (line_num) {
            sum += parseInt(line_num);
        }
    });

    return sum;
}

module.exports = {
    exec
}