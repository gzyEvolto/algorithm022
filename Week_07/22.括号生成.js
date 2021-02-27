var generateParenthesis = function (n) {
  let res = [];
  const generate = (cur, left, right) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    if (left < n) {
      generate(cur + "(", left + 1, right);
    }
    if (right < left) {
      generate(cur + ")", left, right + 1);
    }
  };
  generate("", 0, 0);
  return res;
};
