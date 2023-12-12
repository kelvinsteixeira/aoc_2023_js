const utils = require('./utils');

function calculate_distance(galaxy1, galaxy2, row_expanssions, col_expanssions, expand_factor) {

    let min_row = Math.min(galaxy1.row, galaxy2.row);
    let max_row = Math.max(galaxy1.row, galaxy2.row);
    let min_col = Math.min(galaxy1.col, galaxy2.col);
    let max_col = Math.max(galaxy1.col, galaxy2.col);

    let sel_row_expansions = row_expanssions.filter(row => row >= min_row && row <= max_row);
    let sel_col_expanssions = col_expanssions.filter(col => col >= min_col && col <= max_col);

    let row_add = sel_row_expansions.length * expand_factor;
    let col_add = sel_col_expanssions.length * expand_factor;

    return (Math.abs(galaxy1.row - galaxy2.row) + row_add) + (Math.abs(galaxy1.col - galaxy2.col) + col_add);
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

    let row_expanssions = [];
    let col_expanssions = [];

    for (let row = 0; row < universe.length; row++) {
        if (universe[row].indexOf('#') === -1) {
            row_expanssions.push(row);
        }
    }

    for (let col = 0; col < universe[0].length; col++) {
        if (universe.every(row => row[col] === '.')) {
            col_expanssions.push(col);
        }
    }

    return { universe, row_expanssions, col_expanssions };
}

function exec() {

    const lines = utils.input.split(/\r?\n/);
    const universe = lines.map(line => line.split(''));
    const expanded_universe = get_expanded_universe(universe);
    const galaxies = identify_galaxies(expanded_universe.universe);

    let total = 0;
    for (let galaxy of galaxies) {
        let other_galaxies = galaxies.filter(g => g.id > galaxy.id);
        total += other_galaxies.reduce((acc, g) => acc + calculate_distance(galaxy, g, expanded_universe.row_expanssions, expanded_universe.col_expanssions, 999999), 0);
    }

    return total;
}

module.exports = {
    exec
}
