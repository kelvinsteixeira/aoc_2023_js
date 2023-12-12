const utils = require("./utils");

const str_array_to_int_array = (str_array) =>
  str_array.trim().split(/\s+/).map(Number);

function lineToCard(line) {
  const [card_name, values] = line.split(":");
  const valueParts = values.split("|");

  const winning_numbers = str_array_to_int_array(valueParts[0]);
  const my_numbers = str_array_to_int_array(valueParts[1]);

  let score = my_numbers.reduce((acc, number) => {
    if (winning_numbers.includes(number)) {
      return acc === 0 ? 1 : acc * 2;
    }
    return acc;
  }, 0);

  return {
    card_name,
    winning_numbers,
    my_numbers,
    score,
  };
}

function exec() {
  const lines = utils.input.split("\n");
  const cards = lines.map((line) => lineToCard(line));

  return cards.reduce((acc, card) => {
    return acc + card.score;
  }, 0);
}

module.exports = {
  exec,
};
