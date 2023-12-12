const utils = require("./utils");

function get_line_arrangements(line) {
  const [springs_str, sizes_str] = line.split(" ");
  const sizes = sizes_str.split(",").map((s) => parseInt(s));

  return 1;
}

function get_next_variation(line) {
    
}

function exec() {
  const lines = utils.input.split("\n");

  lines.reduce((acc, line) => {
    const arrangements = get_line_arrangements(line);
    return acc + arrangements;
  }, 0);
}

module.exports = {
  exec,
};
