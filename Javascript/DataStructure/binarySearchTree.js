function Start() {
  let bst = new BinarySearchTree();
  for (i = 0; i <= 10; i++) {
    bst.insert(new Node(Math.random() * 10));
  }
  console.log(bst.LMR());
}

function BinarySearchTree() {
  this.root = null;
}

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// 插入
BinarySearchTree.prototype.insert = function (n) {
  if (this.root == null) {
    this.root = n;
  } else {
    let parent = null;
    let temp = this.root;
    while (temp != null) {
      if (n.val < temp.val) {
        parent = temp;
        temp = temp.left;
      } else if (n.val > temp.val) {
        parent = temp;
        temp = temp.right;
      }
    }
    if (n.val < parent.val) {
      parent.left = n;
    } else if (n.val > parent.val) {
      parent.right = n;
    }
  }
}

// 中序遍历
BinarySearchTree.prototype.LMR = function () {
  let temp = this.root;
  let stack = [];
  let result = [];

  while (stack.length > 0 || temp) {
    if (temp) {
      stack.push(temp);
      temp = temp.left;
    } else {
      temp = stack.pop();
      result.push(temp.val);
      temp = temp.right
    }
  }
  return result;
}

// 前序遍历
BinarySearchTree.prototype.LMR = function () {
  let temp = this.root;
  let stack = [];
  let result = [];
  stack.push(node)
  while (stack.length > 0 || temp) {
    if (temp) {
      result.push(temp.val);
      if (temp.right) stack.push(temp.right) 
    }
  }
}


Start();