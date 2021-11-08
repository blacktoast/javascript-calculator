import { OPERATIONS } from "../utils/common.js";
import { DISPLAY, separateInput } from "../utils/Dom.js";

// 디스플레이의 맨 뒷자리가 숫자인지 확인 -

function checkInputLength() {
  let num = DISPLAY.innerText;
  let separatedNum = separateInput(num);
  if (separatedNum.length > 1) num = separatedNum[1];
  if (num.length >= 3) {
    alert("세자리 초과 숫자는 입력할수없습니다");
    return false;
  }
  return true;
}

export function putNumber({ target }) {
  if (!target.dataset.num) return;
  let puttedNum = target.dataset.num;
  console.log(target.dataset.num);

  if (checkInputLength()) {
    if (DISPLAY.innerText === "0") {
      DISPLAY.innerText = puttedNum;
      return;
    }
    DISPLAY.innerText += puttedNum;
  }
}
