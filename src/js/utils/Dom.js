import { OPERATIONS } from "./common.js";

export const $ = (e) => document.querySelector(e);
export const DISPLAY = $("#total");

export function reRenderDisplay(input) {
  DISPLAY.innerText = input;
}

export function separateInput(input) {
  let operation;
  operation = getOperation(input);
  console.log(operation);
  let result = input.split(operation);
  console.log(result);
  return result;
}

export function getOperation(input) {
  let operation;
  OPERATIONS.forEach((element) => {
    if (input.includes(element)) {
      operation = element;
    }
  });
  return operation;
}
