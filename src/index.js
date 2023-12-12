const day1 = require('./day1');
const day2 = require('./day2');
const day3 = require('./day3');
const day4 = require('./day4');
const day11 = require('./day11');
const day12 = require('./day12');

const doLog = (text, result) => {
    console.log(`${text}: ${result}`);
}

doLog('Day 1 Part 1 Result', day1.part1.exec());
doLog('Day 1 Part 2 Result', day1.part2.exec());
doLog('Day 2 Part 1 Result', day2.part1.exec());
doLog('Day 2 Part 2 Result', day2.part2.exec());
doLog('Day 3 Part 1 Result', day3.part1.exec());
doLog('Day 3 Part 2 Result', day3.part2.exec());
doLog('Day 4 Part 1 Result', day4.part1.exec());
doLog('Day 11 Part 2 Result', day11.part2.exec());
doLog('Day 12 Part 1 Result', day12.part1.exec());