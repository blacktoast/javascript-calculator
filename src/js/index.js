import { allClear } from "./putAny/putClear.js";
import { putNumber } from "./putAny/putNumber.js";
import { putOperations } from "./putAny/putOperations.js";
import { $ } from "./utils/Dom.js";

function initEvent() {}

function init() {
  let $digits = $(".digits");
  let $operations = $(".operations");
  let $modifiers = $(".modifiers");
  $digits.addEventListener("click", putNumber);
  $operations.addEventListener("click", putOperations);
  $modifiers.addEventListener("click", allClear);
}

init();
