const intcode = require("../../day-2-program-alarm/one");
const findNounVerb = require("../../day-2-program-alarm/two");
const QuizInput = require("../../day-2-program-alarm/input");

it("should return `2,0,0,0,99` when input = 1,0,0,0,99", () => {
  let input = `1,0,0,0,99`;
  expect(intcode(input)).toStrictEqual([2, 0, 0, 0, 99]);
});

it("should return `2,3,0,6,99` when input = 2,3,0,3,99", () => {
  let input = `2,3,0,3,99`;
  expect(intcode(input)).toStrictEqual([2, 3, 0, 6, 99]);
});

it("should return `30,1,1,4,2,5,6,0,99` when input = 1,1,1,4,99,5,6,0,99", () => {
  let input = `1,1,1,4,99,5,6,0,99`;
  expect(intcode(input)).toStrictEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
});

it("should return quizAnswer when input is QuizInput", () => {
  let input = QuizInput;
  expect(intcode(input, true)).toContain(3516593);
});

it("should return 1202 when input is {QuizInput} and output is 3267740", () => {
  let input = QuizInput;
  expect(findNounVerb(input, 3516593)).toBe(1202);
});
