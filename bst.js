/* The treeNode class represents a node in a binary tree with a value, a left child, and a right child. */
class treeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* The BinaryTree class represents a binary search tree and provides methods for inserting, deleting,
searching, and traversing the tree. */
class BinaryTree {
  /**
   * The constructor function initializes the root property to null.
   */
  constructor() {
    this.root = null;
  }

  /**
   * The insert function adds a new node with a given value to a binary search tree.
   * @param value - The value parameter represents the value that you want to insert into the binary
   * search tree.
   * @returns In this code snippet, nothing is being explicitly returned. However, if the `insert`
   * function is being called as a method on an object, it is likely that the object itself is being
   * implicitly returned.
   */
  insert(value) {
    const newNode = new treeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (current.value > value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  /**
   * The inOrder function recursively traverses a binary tree and prints the values of each node in
   * ascending order.
   * @param [node] - The parameter "node" represents the current node being visited in a binary tree
   * traversal. It is initially set to the root node of the tree.
   */
  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  /**
   * The postOrder function recursively traverses a binary tree and prints the value of each node in
   * post-order.
   * @param [node] - The "node" parameter represents the current node being traversed in a binary tree.
   */
  postOrder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.postOrder(node.left);
      this.postOrder(node.right);
    }
  }

  /**
   * The preOrder function recursively traverses a binary tree and prints the value of each node in
   * post-order.
   * @param [node] - The parameter "node" represents the current node being visited in a binary tree.
   */
  preOrder(node = this.root) {
    if (node) {
      this.preOrder(node.left);
      this.preOrder(node.right);
      console.log(node.value);
    }
  }

  /**
   * The delete function is used to remove a node with a specific value from a binary search tree.
   * @param value - The value parameter represents the value of the node that needs to be deleted from
   * the binary search tree.
   */
  delete(value) {
    this.root = this.deleteHelper(this.root, value);
  }

  /**
   * The function `deleteHelper` is a recursive function that deletes a node with a given key from a
   * binary search tree.
   * @param root - The root parameter represents the root node of a binary search tree.
   * @param key - The `key` parameter in the `deleteHelper` function represents the value that needs to
   * be deleted from the binary search tree.
   * @returns the modified root node of the binary search tree after deleting the node with the
   * specified key.
   */
  deleteHelper(root, key) {
    if (!root) {
      return null;
    }

    if (key < root.value) {
      root.left = this.deleteHelper(root.left, key);
    } else if (key > root.value) {
      root.right = this.deleteHelper(root.right, key);
    } else {
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      const min = this.findMin(root.left);

      root.value = min.value;

      root.left = this.deleteHelper(root.left, root.value);
    }
    return root;
  }

  /**
   * The function finds the minimum value in a binary tree by traversing to the leftmost node.
   * @param node - The parameter "node" represents a node in a binary search tree.
   * @returns The minimum value node in the given binary tree.
   */
  findMin(node) {
    while (node.left) {
      node = node.left;
    }

    return node;
  }

  /**
   * The function searches for a specific value in a binary search tree and returns true if the value
   * is found, otherwise it returns false.
   * @param key - The key parameter is the value that we are searching for in the binary search tree.
   * @returns a boolean value. It returns true if the key is found in the binary search tree, and false
   * otherwise.
   */
  search(key) {
    let current = this.root;

    while (current) {
      if (current.value === key) return true;

      if (current.value > key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  /**
   * The `deleteDuplicates` function deletes duplicate elements from an array.
   */
  deleteDuplicates() {
    const data = [],
      duplicates = [];

    this.findDuplicates(duplicates, data);

    duplicates.forEach((key) => {
      this.root = this.deleteHelper(this.root, key);
    });
  }

  /**
   * The function `findDuplicates` recursively searches a binary tree and adds any duplicate values to
   * the `duplicates` array.
   * @param duplicates - The "duplicates" parameter is an array that will store any duplicate values
   * found in the "data" array.
   * @param data - The `data` parameter is an array that contains the values of nodes in a binary tree.
   * @param [node] - The "node" parameter represents the current node being processed in a binary tree.
   * @returns There is no explicit return statement in the code provided. However, the function is
   * being called recursively, so it is likely that the function is being used to modify the
   * "duplicates" and "data" arrays passed as arguments.
   */
  findDuplicates(duplicates, data, node = this.root) {
    if (node) {
      this.findDuplicates(duplicates, data, node.left);
      this.findDuplicates(duplicates, data, node.right);

      if (data.includes(node.value)) {
        duplicates.push(node.value);
      } else {
        data.push(node.value);
      }

      return;
    }
  }

  /**
   * The function finds the height of a binary tree by recursively calculating the maximum height of
   * its left and right subtrees.
   * @param [root] - The "root" parameter represents the root node of a binary tree.
   * @returns The height of the binary tree rooted at the given root node.
   */
  findHeight(root = this.root) {
    if (!root) return -1;

    const leftHeight = this.findHeight(root.left);
    const rightHeight = this.findHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

/* The code snippet is creating a binary search tree using the `BinaryTree` class and performing
various operations on it. */
const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(40);
tree.insert(20);
tree.insert(20);
tree.insert(80);
tree.insert(40);
tree.insert(40);
tree.insert(5);

tree.inOrder();
tree.preOrder();
tree.postOrder();

tree.deleteDuplicates();

tree.delete(40);

console.log("Height og the tree is: ", tree.findHeight());

console.log("Search results: ", tree.search(10), tree.search(100));

console.log("Tree: ", tree.root);
