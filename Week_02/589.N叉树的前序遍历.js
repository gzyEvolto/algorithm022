/* 递归 */
var preorder = function (root) {
  if (!root) return [];
  const res = [];
  function traversal(root) {
    if (!root) return;
    res.push(root.val);
    root.children.forEach((item) => {
      traversal(item);
    });
  }
  traversal(root);
  return res;
};

/* 栈迭代 */
var preorder = function (root) {
  if (!root) return [];
  const res = [],
    stack = [root];
  while (stack.length) {
    let curNode = stack.pop();
    res.push(curNode.val);
    if (curNode.children != null) {
      //存在孩子节点时遍历孩子节点
      for (var i = curNode.children.length - 1; i >= 0; i--) {
        //将孩子节点倒叙（从右往左）存入堆栈中，这样才能从左到右遍历孩子节点
        stack.push(curNode.children[i]);
      }
    }
  }
  return res;
};

/* 队列迭代 */
var preorder = function (root) {
  if (!root) return [];
  const res = [],
    queue = [root];
  while (queue.length) {
    let curNode = queue.shift();
    res.push(curNode.val);
    if (curNode.children != null) {
      //存在孩子节点时遍历孩子节点
      queue.unshift(...curNode.children);
    }
  }
  return res;
};
