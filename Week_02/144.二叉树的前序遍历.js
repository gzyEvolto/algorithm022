//递归
var preorderTraversal = function (root) {
  const result = [];
  const visitor = (root) => {
    if (!root) return;
    result.push(root.val);
    visitor(root.left);
    visitor(root.right);
  };
  visitor(root);
  return result;
};

//迭代
var preorderTraversal = function(root) {
    const stack = [];
    let result = [];
    let node = root;
    while(node){
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
        result.push(node);
        node = stack.pop();
    };
    result = result.map(item=>item.val);
    return result;
}
