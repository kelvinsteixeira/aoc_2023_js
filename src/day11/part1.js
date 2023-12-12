const utils = require('./utils');

function add_row(universe, row_index) {
    universe.splice(row_index, 0, []);
    for (let i = 0; i < universe[0].length; i++) {
        universe[row_index].push('.');
    }
}

function add_column(universe, col_index) {
    for (let i = 0; i < universe.length; i++) {
        universe[i].splice(col_index, 0, '.');
    }
}

function calculate_distance(galaxy1, galaxy2) {
    return Math.abs(galaxy1.row - galaxy2.row) + Math.abs(galaxy1.col - galaxy2.col);
}

function identify_galaxies(universe) {
    let galaxies = [];
    let count = 1;
    for (let row = 0; row < universe.length; row++) {
        for (let col = 0; col < universe[0].length; col++) {
            if (universe[row][col] !== '.') {
                galaxies.push({ id: count, row, col });
                count++;
            }
        }
    }

    return galaxies;
}

function get_expanded_universe(universe) {

    for (let row = 0; row < universe.length; row++) {
        if (universe[row].indexOf('#') === -1) {
            add_row(universe, row);
            row++;
        }
    }

    for (let col = 0; col < universe[0].length; col++) {
        if (universe.every(row => row[col] === '.')) {
            add_column(universe, col);
            col++;
        }
    }

    return universe;
}

function exec() {

    const lines = utils.input.split(/\r?\n/);
    const universe = lines.map(line => line.split(''));
    const expanded_universe = get_expanded_universe(universe);
    const galaxies = identify_galaxies(expanded_universe);

    let total = 0;
    for (let galaxy of galaxies) {
        let other_galaxies = galaxies.filter(g => g.id > galaxy.id);
        total += other_galaxies.reduce((acc, g) => acc + calculate_distance(galaxy, g), 0);
    }
}

module.exports = {
    exec
}
