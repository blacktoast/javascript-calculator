import { DISPLAY } from "../utils/Dom.js";

function checkInputNum() {
  if (DISPLAY.innerText.length >= 3) {
    alert("세자리 초과 숫자는 입력할수없습니다");
    return false;
  }
  return true;
}

export function putNumber({ target }) {
  let puttedNum = target.innerText;
  if (checkInputNum()) {
    if (DISPLAY.innerText === "0") {
      DISPLAY.innerText = puttedNum;
      return;
    }
    DISPLAY.innerText += puttedNum;
  }
}
