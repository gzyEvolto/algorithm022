/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var inorderTraversal = function (root, arr = []) {
  if (!root) return [];
  inorderTraversal(root.left, arr);
  console.log(root.val);
  arr.push(root.val);
  inorderTraversal(root.right, arr);
  return arr;
};

// 迭代法？ 目前是使用栈的那个操作 左->根->右
var inorderTraversal = function (root) {
  if (!root) return [];
  let stack = []; // 后进先出。
  let res = [];
  // 加一个指针
  let p = root;
  while (stack.length || p) {
    // 先处理左子树
    while (p) {
      stack.push(p); // 先入栈
      p = p.left;
    }
    const n = stack.pop(); // 左子树出栈
    console.log(n.val); // 访问根
    res.push(n.val);
    p = n.right; // 到右子树了。
  }
  return res;
};
