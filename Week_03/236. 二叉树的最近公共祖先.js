/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  //定义递归边界
  if (root === null) return null;
  if (root === p || root === q) {
    return root;
  }
  //递归层级问题的理解：如果先找到了其中一个子树为q/p，在同一层级也找到了，则这个层级本身的root就是共同祖先。如果先找到了其中一个匹配项，另一个在同一层级中未找到
  const left = lowestCommonAncestor(root.left, p, q);
  var i = 1,
    j = 2;
  console.log(left, `这是左`, i++);
  const right = lowestCommonAncestor(root.right, p, q);
  console.log(right, `这是右`, j++);
  if (left && right) {
    return root;
  }
  if (left === null) {
    return right;
  }
  return left;
};
