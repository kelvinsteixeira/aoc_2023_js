# Advent of Code 2023 Solutions in JavaScript

Welcome to my repository for the Advent of Code 2023 challenges, solved using JavaScript. The solutions are organized by day, with each folder containing scripts for both parts of the challenge and utility files.

## Project Structure

- `src/`: The main source directory containing:
  - `day1/`, `day2/`, `day3/`, etc.: Folders for each day with:
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

| Day       | Operation                | Ops/sec       | Margin of Error | Runs Sampled | Time per Op       | Margin of Error |
|-----------|--------------------------|---------------|-----------------|--------------|-------------------|-----------------|
| Day 1     | Part 1                   | 1,768 ops/sec | ±0.32%          | 93           | 0.57 ms/op        | ±0.32%          |
| Day 1     | Part 2                   | 299 ops/sec   | ±0.22%          | 88           | 3.34 ms/op        | ±0.22%          |
| Day 2     | Part 1                   | 992 ops/sec   | ±0.30%          | 94           | 1.01 ms/op        | ±0.30%          |
| Day 2     | Part 2                   | 938 ops/sec   | ±0.45%          | 94           | 1.07 ms/op        | ±0.45%          |
| Day 3     | Part 1                   | 687 ops/sec   | ±0.36%          | 93           | 1.46 ms/op        | ±0.36%          |
| Day 3     | Part 2                   | 2,006 ops/sec | ±0.43%          | 96           | 0.50 ms/op        | ±0.43%          |