const utils = require('./utils');

// ===================================================================
// Utils
// ===================================================================

const getGameSets = (gameStr) => {
    const gameSetsStr = gameStr.split(':')[1].trim().split(';');
    const gameSets = {
        sets: []
    };

    for (const gameSetStr of gameSetsStr) {
        const gameSet = getGameSet(gameSetStr);
        gameSets.sets.push(gameSet);

        for (const color of Object.keys(gameSet)) {
            if (gameSets[color] === undefined || gameSets[color] < gameSet[color]) {
                gameSets[color] = gameSet[color];
            }
        }
    }

    return gameSets;
}

const getGameSet = (gameSetStr) => {
    gameSetStr = gameSetStr.trim();
    const gameSetPartsStr = gameSetStr.split(',');
    const gameSet = {}
    for (let gametSetPartStr of gameSetPartsStr) {
        gametSetPartStr = gametSetPartStr.trim();
        const number = Number(gametSetPartStr.split(' ')[0]);
        const color = gametSetPartStr.split(' ')[1];

        gameSet[color] = number;
    };

    return gameSet;
}

// ===================================================================
// Main
// ===================================================================

function exec() {
    const inputLines = utils.input.split(/\r?\n/);

    let currentId = 1;
    const games = [];
    for (let line of inputLines) {
        const gameSets = getGameSets(line);
        let game = {
            id: currentId,
            sets: gameSets.sets,
            higherRed: gameSets.red,
            higherBlue: gameSets.blue,
            higherGreen: gameSets.green,
        };

        // game.isPossibleGame = isPossibleGame(game);
        game.power = game.higherRed * game.higherBlue * game.higherGreen;
        games.push(game);
        currentId++;
    }

    const result = games.reduce((acc, game) => acc + game.power, 0);
    console.log('(Day 2 pt 2) Result is: ', result);
}

module.exports = {
    exec
}