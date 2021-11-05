import { operations } from "../utils/common.js";
import { DISPLAY } from "../utils/Dom.js";

function calculate() {
  console.log("lets calculate");
}

function checkDisplay() {
  if (checkOperation()) return true;
  if (checkEmpty()) return true;
  return false;
}

function checkEmpty() {
  let nums = DISPLAY.innerText;
  if (nums === "0") {
    alert("숫자를 입력하신 뒤 계산해주세요");
    return true;
  }
}

function checkOperation() {
  let nums = DISPLAY.innerText;
  let l = nums.length;
  console.log(operations.includes(nums[l - 1]));
  if (operations.includes(nums[l - 1])) {
    alert("계산기호 뒤에는 계산기호를 입력할수없습니다");
    return true;
  }
}

export function putOperations({ target }) {
  let putOperation = target.innerText;
  if (!checkDisplay()) {
    if (putOperation === "=") {
      calculate();
    }
    console.log(putOperation);
    DISPLAY.innerText += putOperation;
    return 0;
  }
}
