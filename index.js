class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(item) {
        if (!this.root) { 
            this.root = new Node(item);
            return;
        }

        function searchTree(node) {
            if (item < node.data) {
                if (!node.left) {
                    node.left = new Node(item);
                    return;
                } else {
                    searchTree(node.left);
                }
            } else if (item > node.data) {
                if (!node.right) {
                    node.right = new Node(item);
                    return;
                } else {
                    searchTree(node.right);
                }
            }
            return null;
        }

        searchTree(this.root);
    }

    delete(data) {

    }

    find(data) {

    }

    height() {

    }

    depth() {

    }

    isBalanced() {

    }

    rebalance() {

    }

    inOrder() {

    }

    preOrder() {

    }

    postOrder() {

    }

    levelOrder() {

    }
}

const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

function buildTree(arr) {
    arr.forEach(element => {
        myTree.insert(element) 
     });
}

function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

const myTree = new BinarySearchTree

buildTree(data)
prettyPrint(myTree.root)