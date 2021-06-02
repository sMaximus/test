const math = require("module_name");
const { methodA } = require("module_name");
console.log(methodA);
console.log(methodA);
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

var fib = function (n) {
  if (n < 2) {
    return n;
  }

  let p = 0;
  (q = 0), (r = 1);

  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }

  return r;
};

let mergeTwoList = (l1, l2) => {};
