# Advent of Code 2023 Solutions in JavaScript

Welcome to my repository for the Advent of Code 2023 challenges, solved using JavaScript. The solutions are organized by day, with each folder containing scripts for both parts of the challenge and utility files.

## Project Structure

- `src/`: The main source directory containing:
  - `day1/`, `day2/`, `day3/`, `day4/`, `day11/`, etc.: Folders for each day with:
    - `part1.js` and `part2.js`: JavaScript files for parts 1 and 2.
    - `utils.js`: Utility file with data and helper functions.
  - `benchmark.js`: The benchmark script for performance evaluation.

## Installation and Usage

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run all challenges: `npm run dev`.
4. Benchmark performance: `npm run benchmark`.

## Scripts

- `npm run dev`: Executes all challenges, displaying solutions for each day.
- `npm run benchmark`: Runs the benchmark script, evaluating solution performance.

## Performance Metrics

The benchmark results for each day's solutions are as follows:

| Day   | Operation | Ops/sec       | Margin of Error | Runs Sampled | Time per Op | Margin of Error |
|-------|-----------|---------------|-----------------|--------------|-------------|-----------------|
| Day 1 | Part 1    | 1,776 ops/sec | ±0.34%          | 95           | 0.56 ms/op  | ±0.34%          |
| Day 1 | Part 2    | 304 ops/sec   | ±0.26%          | 91           | 3.29 ms/op  | ±0.26%          |
| Day 2 | Part 1    | 982 ops/sec   | ±0.21%          | 95           | 1.02 ms/op  | ±0.21%          |
| Day 2 | Part 2    | 926 ops/sec   | ±0.53%          | 95           | 1.08 ms/op  | ±0.53%          |
| Day 3 | Part 1    | 677 ops/sec   | ±0.32%          | 93           | 1.48 ms/op  | ±0.32%          |
| Day 3 | Part 2    | 2,018 ops/sec | ±0.16%          | 98           | 0.50 ms/op  | ±0.16%          |
| Day 4 | Part 1    | 1,226 ops/sec | ±0.33%          | 96           | 0.82 ms/op  | ±0.33%          |
| Day 11| Part 1    | 748 ops/sec   | ±3.84%          | 96           | 1.34 ms/op  | ±3.84%          |
| Day 11| Part 2    | 115 ops/sec   | ±0.74%          | 84           | 8.70 ms/op  | ±0.74%          |