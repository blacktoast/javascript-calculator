import {
  DISPLAY,
  getOperation,
  reRenderDisplay,
  separateInput,
} from "../utils/Dom.js";

function handleCalculate(nums, operation) {
  switch (operation) {
    case "+":
      return nums[0] + nums[1];
      break;
    case "-":
      return nums[0] - nums[1];
      break;
    case "X":
      return nums[0] * nums[1];
      break;
    case "/":
      return nums[0] % nums[1];
      break;
  }
}

export function calculate(input) {
  let operation = getOperation(input);
  let nums = separateInput(input);
  let result = handleCalculate(nums, operation);
  return result;
}
