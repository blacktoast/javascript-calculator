import { OPERATIONS } from "./common.js";

export const $ = (e) => document.querySelector(e);
export const DISPLAY = $("#total");

export function separateInput(input) {
  let operation;
  OPERATIONS.forEach((element) => {
    if (input.includes(element)) {
      operation = element;
    }
  });
  console.log(operation);
  let result = input.split(operation);
  console.log(result);
  return result;
}
