import { putNumber } from "./putNumber/putNumber.js";
import { $ } from "./utils/Dom.js";

function initEvent() {}

function init() {
  let $digits = $(".digits");
  $digits.addEventListener("click", putNumber);
}

init();
