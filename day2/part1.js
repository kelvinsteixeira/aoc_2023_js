const utils = require('./utils');

// ===================================================================
// Utils
// ===================================================================

const getGameSets = (gameStr) => {
    const gameSetsStr = gameStr.split(':')[1].trim().split(';');
    const gameSets = [];
    for (const gameSetStr of gameSetsStr) {
        const gameSet = getGameSet(gameSetStr);
        gameSets.push(gameSet);
    }

    return gameSets;
}

const getGameSet = (gameSetStr) => {
    gameSetStr = gameSetStr.trim();
    const gameSetPartsStr = gameSetStr.split(',');
    const gameSet = {}
    for (let gametSetPartStr of gameSetPartsStr) {
        gametSetPartStr = gametSetPartStr.trim();
        const number = gametSetPartStr.split(' ')[0];
        const color = gametSetPartStr.split(' ')[1];

        gameSet[color] = number;
    };

    return gameSet;
}

const isPossibleGame = (game) => {

    for (const gameSet of game.sets) {
        for (const color of Object.keys(gameSet)) {
            if (utils.bagCubes[color] < gameSet[color]) {
                return false;
            }
        }
    }

    return true;
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
            sets: gameSets
        };

        game.isPossibleGame = isPossibleGame(game);
        games.push(game);
        currentId++;
    }

    let result = games.filter(game => game.isPossibleGame).reduce((acc, game) => acc + game.id, 0);
    console.log('(Day 2 pt 1) Result is: ', result);
}

module.exports = {
    exec
}