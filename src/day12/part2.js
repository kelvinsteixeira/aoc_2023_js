const utils = require("./utils");

function isValid(spring, condition) {
  const sequences = [];
  let damagedCount = 0;

  for (let i = 0; i < spring.length; i++) {
    if (spring[i] === '#') {
      damagedCount++;
    } else if (damagedCount > 0) {
      sequences.push(damagedCount);
      damagedCount = 0;
    }
  }

  if (damagedCount > 0) {
    sequences.push(damagedCount);
  }

  return sequences.join(",") === condition.join(",");
}

function check(line, condition, acc = 0) {

  let index = line.indexOf("?");
  if (index === -1) {
    return acc += isValid(line, condition) ? 1 : 0;
  }

  const start = line.substring(0, index);
  const end = line.substring(index + 1);

  acc = check(`${start}.${end}`, condition, acc);
  acc = check(`${start}#${end}`, condition, acc);

  return acc;
}

function exec() {
  const values = utils.input.split("\n");

  let sum = 0;
  for (let i = 0; i < values.length; i++) {

    let spring = values[i].split(" ")[0];
    let condition = values[i].split(" ")[1].split(",").map((s) => parseInt(s));

    sum += check(spring, condition);
  }

  return sum;
}

module.exports = {
  exec,
};
