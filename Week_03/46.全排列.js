/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const subset = [];
  dfs(1);

  function dfs(index) {
    if (subset.length === k) {
      res.push(subset.slice());
      return;
    }
    for (let i = index; i <= n; i++) {
      subset.push(i);
      dfs(i + 1);
      subset.pop();
    }
  }
  // 返回结果数组
  return res;
};
