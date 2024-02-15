
class treeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree{
  constructor(){
    this.root = null;
  }


  insert(value){
    const newNode = new treeNode(value);

    if(!this.root){
      this.root = newNode;
      return;
    }

    let current = this.root;

    while(current){
      if(current.value > value){
        if(!current.left){
          current.left = newNode
          break;
        }
        current = current.left
      } else {
        if(!current.right){
          current.right = newNode;
          break;
        }
        current = current.right
      }
    }
  }



  inOrder(node = this.root){
    if(node){
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }


  postOrder(node = this.root){
    if(node){
      console.log(node.value);
      this.postOrder(node.left);
      this.postOrder(node.right);
    }
  }


  preOrder(node = this.root){
    if(node){
      this.preOrder(node.left);
      this.preOrder(node.right);
      console.log(node.value);
    }
  }


  delete(value){
    this.root = this.deleteHelper(this.root, value);
  }


  deleteHelper(root, key){
    if(!root){
      return null
    }


    if(key < root.value){
      root.left = this.deleteHelper(root.left, key);
    } else if(key > root.value) {
      root.right = this.deleteHelper(root.right, key);
    } else {
      if(!root.left) return root.right;
      if(!root.right) return root.left;

      const min = this.findMin(root.left);

      root.value = min.value;

      root.left = this.deleteHelper(root.left, root.value)

    }
    return root;
  }


  findMin(node){
    while(node.left){
      node = node.left
    }

    return node;
  }


  search(key) {
    let current = this.root;

    while(current){
      if(current.value === key) return true;

      if (current.value > key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false
  }


  deleteDuplicates(){
    const data = [], duplicates = [];

    this.findDuplicates(duplicates, data);

    duplicates.forEach(key => {
      this.root = this.deleteHelper(this.root, key)
    })
  }


  findDuplicates(duplicates, data, node = this.root){
    if(node){
      this.findDuplicates(duplicates, data, node.left);
      this.findDuplicates(duplicates, data, node.right);

      if(data.includes(node.value)){
        duplicates.push(node.value)
      } else {
        data.push(node.value)
      }

      return
    }
  }

  findHeight(root = this.root) {
    if(!root) return -1

    const leftHeight = this.findHeight(root.left);
    const rightHeight = this.findHeight(root.right);

    return Math.max(leftHeight, rightHeight)+1;
  }

}



const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(40);
tree.insert(20);
tree.insert(20);
tree.insert(80)
tree.insert(40);
tree.insert(40);
tree.insert(5);

tree.inOrder()
tree.preOrder()
tree.postOrder();

tree.deleteDuplicates() 

tree.delete(40)

console.log("Height og the tree is: ", tree.findHeight())

console.log(tree.search(10), tree.search(100));

console.log(tree.root);
