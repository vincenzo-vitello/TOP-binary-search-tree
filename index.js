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
    buildTree(arr) {
        if (arr.length === 0) return null; 
    
        let middle = Math.floor(arr.length / 2);
        let node = new Node(arr[middle]);
    
        node.left = this.buildTree(arr.slice(0, middle)); 
        node.right = this.buildTree(arr.slice(middle + 1)); 
    
        return node;
    }
    insert(data) {
        if (!this.root) { 
            this.root = new Node(data);
            return;
        }

        function searchTree(node) {
            if (data < node.data) {
                if (!node.left) {
                    node.left = new Node(data);
                    return;
                } else {
                    searchTree(node.left);
                }
            } else if (data > node.data) {
                if (!node.right) {
                    node.right = new Node(data);
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
        function deleteNode(node, data) {
            if(!node) return null
            if(data === node.data) {
                // check if node has no children
                if(!node.left && !node.right) return null;

                // check if node has only right children
                if(!node.left) return node.right;

                // check if node has only left children
                if(!node.right) return node.left;

                let temp = node.right;
                while(temp.left) {
                    temp = temp.left
                }
                node.data = temp.data;
                node.right = deleteNode(node.right, temp.data);
                return node;
            } else if(data < node.data) {
                node.left = deleteNode(node.left, data);
                return node;
            } else {
                node.right = deleteNode(node.right, data);
                return node;
            }
        }
        this.root = deleteNode(this.root, data)
    }

    find(data) {
        let cur = this.root;
        while(cur) {
            if(data === cur.data) return cur;
            if(data < cur.data) cur = cur.left;
            if(data > cur.data) cur = cur.right;
        }
    }

    height(node) {
        if(!node) return -1;
        
        let left = this.height(node.left);
        let right = this.height(node.right);

        return 1 + Math.max(left, right)
    }

    depth(node) {
        if(!node || !this.root) return -1;

        let cur = this.root;
        let counter = 0;

        while(cur) {
            if(node.data === cur.data) return counter;
            if(node.data < cur.data) cur = cur.left;
            if(node.data > cur.data) cur = cur.right;
            counter++
        }
        return -1 
    }

    isBalanced(node = this.root) {
        if (!node) return true; 
    
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
    
        if (Math.abs(leftHeight - rightHeight) > 1) return false; 

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    rebalance() {
        if(!this.isBalanced()) {
            this.root = this.buildTree(this.inOrder())
        }
    }

    inOrder(node = this.root) {
        if(!node) return [];

        let inOrderArr = [];
        function inOrderTraversal(node) {
            if(node.left) inOrderTraversal(node.left);
            inOrderArr.push(node.data);
            if(node.right) inOrderTraversal(node.right)
        }
        inOrderTraversal(node);
        return inOrderArr
    }

    preOrder(node = this.root) {
        if(!node) return [];

        let preOrderArr = [];
        function preOrderTraversal(node) {
            if(node) preOrderArr.push(node.data);
            if(node.left) preOrderTraversal(node.left);
            if(node.right) preOrderTraversal(node.right);
        }
        preOrderTraversal(node)
        return preOrderArr
    }

    postOrder(node = this.root) {
        if(!node) return [];

        let postOrderArr = [];
        function postOrderTraversal(node) {
            if(node.left) postOrderTraversal(node.left);
            if(node.right) postOrderTraversal(node.right);
            if(node) postOrderArr.push(node.data)
        }
        postOrderTraversal(node)
        return postOrderArr
    }

    levelOrder(node = this.root) {
        let levelOrderArr = [];
        let queue = [];
        
        if(this.root) {
        queue.push(this.root)

        while(queue.length > 0) {
            let node = queue.shift();
            levelOrderArr.push(node.data)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            }
            return levelOrderArr
        } else return null
    }
}

const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

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
data.forEach((element) => 
    myTree.insert(element)
)
prettyPrint(myTree.root)
myTree.delete(1)
prettyPrint(myTree.root)
myTree.insert(1)
prettyPrint(myTree.root)
console.log(myTree.find(1))
console.log("heigth: ", myTree.height(myTree.root))
console.log("heigth: ", myTree.height(myTree.root.left.left.left));
console.log("heigth: ", myTree.height(myTree.root.right.right))
console.log("depth: ", myTree.depth(myTree.root.right))
console.log("depth: ", myTree.depth(myTree.root.right.left))
prettyPrint(myTree.root)
console.log("is the tree balanced? ", myTree.isBalanced())
console.log("in order tree: ", myTree.inOrder())
console.log("pre order tree: ", myTree.preOrder())
console.log("post order tree: ", myTree.postOrder())
console.log("level order tree: ", myTree.levelOrder())
myTree.rebalance();
console.log('rebalance function called');
console.log("is the tree balanced? ", myTree.isBalanced())
prettyPrint(myTree.root)