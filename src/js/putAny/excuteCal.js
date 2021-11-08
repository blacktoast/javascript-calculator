import {
  DISPLAY,
  getOperation,
  reRenderDisplay,
  separateInput,
} from "../utils/Dom.js";

function handleCalculate(nums, operation) {
  switch (operation) {
    case "+":
      return String(Number(nums[0]) + Number(nums[1]));
      break;
    case "-":
      return String(Number(nums[0]) + Number(nums[1]));
      break;
      break;
    case "X":
      return String(Number(nums[0]) + Number(nums[1]));
      break;
      break;
    case "/":
      return String(Number(nums[0]) + Number(nums[1]));
      break;
      break;
  }
}

export function calculate(input) {
  let operation = getOperation(input);
  let nums = separateInput(input);
  let result = handleCalculate(nums, operation);
  return result;
}
