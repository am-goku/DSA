class node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
class tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;

    while (current) {
      if (value < current.data) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  deleteNode(key) {
    this.root = this.deleteHelper(this.root, key);
  }

  deleteHelper(root, key) {
    if (root === null) {
      return null;
    }

    if (key < root.data) {
      this.deleteHelper(root.left, key);
    } else if (key > root.data) {
      this.deleteHelper(root.right, key);
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

  inOrder(node = this.root) {
    if (node) {
      inOrder(node.left);
      console.log(node.data);
      inOrder(node.right);
    }
  }
}

const t = new tree();

t.insert(10);
t.insert(20);
t.insert(5);
t.insert(2);
t.insert(33);

t.deleteNode(5);

console.log(t.root);
