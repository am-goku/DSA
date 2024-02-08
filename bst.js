class TreeNode {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (current.data > value) {
        if (current.left == null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right == null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(key) {
    let current = this.root;

    while (current) {
      if (current.data === key) {
        return true;
      }

      if (key < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.root) {
    if (node) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  delete(key) {
    this.root = this.deleteHelper(this.root, key);
  }

  deleteHelper(root, key) {
    if (root === null) {
      return null;
    }

    if (root.data > key) {
      root.left = this.deleteHelper(root.left, key);
    } else if (root.data < key) {
      root.right = this.deleteHelper(root.right, key);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      const minNode = this.findMin(root.right);
      root.data = minNode.data;
      root.right = this.deleteHelper(root.right, root.data);
    }
    return root;
  }

  findMin(node) {
    while (node.left) {
      node = node.left;
    }

    return node;
  }

  deleteDuplicates() {
    // const dups = []
    const dups = this.findDups();

    dups.forEach((i) => {
      this.root = this.deleteHelper(this.root, i);
    });
  }

  findDups() {
    const visited = new Set(),
      dups = [];

    const travel = (node) => {
      if (node) {
        if (visited.has(node.data)) {
          dups.push(node.data);
        } else {
          visited.add(node.data);
        }

        travel(node.left);
        travel(node.right);
      }
    };
    travel(this.root);
    return dups;
  }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(40);
tree.insert(20);
tree.insert(80)
tree.insert(40);
tree.insert(5);

tree.inOrder()
tree.preOrder()
tree.postOrder();

tree.deleteDuplicates() 

tree.delete(40)

console.log(tree.search(10), tree.search(100));

console.log(tree.root);
