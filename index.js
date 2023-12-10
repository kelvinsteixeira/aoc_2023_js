const day1 = require('./day1');
const day2 = require('./day2');
const day3 = require('./day3');

const benchmark = (func, name) => {
    console.time(name);
    func();
    console.timeEnd(name);
}

benchmark(day1.part1.exec, 'benchmark');
benchmark(day1.part2.exec, 'benchmark');
benchmark(day2.part1.exec, 'benchmark');
benchmark(day2.part2.exec, 'benchmark');
benchmark(day3.part1.exec, 'benchmark');
benchmark(day3.part2.exec, 'benchmark');
