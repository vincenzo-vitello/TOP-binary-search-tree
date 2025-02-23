# Binary Search Tree (BST) Implementation

This project implements a **Binary Search Tree (BST)** in JavaScript, providing methods for inserting, deleting, searching, and balancing the tree.

## Features

- Insert elements into the BST
- Delete elements from the BST
- Find a specific element
- Calculate the height and depth of nodes
- Check if the tree is balanced
- Perform tree traversals (in-order, pre-order, post-order, level-order)
- Automatically rebalance the tree if needed

## How It Works

1. The tree is built using the `insert` method, adding elements while maintaining the BST property.
2. The `delete` method removes elements while preserving the structure.
3. The `find` method searches for a specific node.
4. The `isBalanced` method checks whether the tree is balanced.
5. If the tree becomes unbalanced, calling `rebalance` restructures it into a balanced BST.
