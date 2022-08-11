const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [_, selectNum] = input[0].split(" ").map(Number);
  const rangeArr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const getCombinations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    arr.forEach((fixed) => {
      const rest = arr;
      const combinations = getCombinations(rest, selectNumber - 1);
      const attatched = combinations.map((el) => [fixed, ...el]).filter((el) => el[0] <= el[1]);
      results.push(...attatched);
    });
    return results;
  };
  const answer = getCombinations(rangeArr, selectNum)
    .map((arr) => arr.join(" ").split(","))
    .join("\n");
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
