const day1 = require('./day1');
const day2 = require('./day2');
const day3 = require('./day3');
const day4 = require('./day4');
const day11 = require('./day11');

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite
  .add('Day 1: part 1', () => day1.part1.exec())
  .add('Day 1: part 2', () => day1.part2.exec())
  .add('Day 2: part 1', () => day2.part1.exec())
  .add('Day 2: part 2', () => day2.part2.exec())
  .add('Day 3: part 1', () => day3.part1.exec())
  .add('Day 3: part 2', () => day3.part2.exec())
  .add('Day 4: part 1', () => day4.part1.exec())
  .add('Day 11: part 1', () => day11.part1.exec())
  .add('Day 11: part 2', () => day11.part2.exec())
  .on('cycle', function(event) {
    console.log(String(event.target));

    const bench = event.target;
    const timePerOp = 1 / bench.hz * 1000; // Convert ops/sec to milliseconds per operation
    console.log(bench.name + ': ' + timePerOp.toFixed(2) + ' ms/op (±' + bench.stats.rme.toFixed(2) + '%)');
  })
  .run({ 'async': true });