// DFS will iterate through our data structure in a "vertical way".
// Pre order: Visit current node, then left node, then right node.
// Post order: Explore all children to the left, and all children to the right before visiting the node.
// In order: Explore all children to the left, visit the current node, and explore all children to the right.

// PRE ORDER DFS---------
// Create a variable to store the values of the visited nodes
// Store the root of the tree in a variable
// Write a helper function that accepts a node as a parameter
// Push the value of the node to the variable that stores values
// If the node has a left property, call helper function with left node as parameter
// If the node has a right property, call helper function with left node as parameter
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    var newNode = new Node(value);
    if(this.root === null){
        this.root = newNode;
        return this;
    }
    var current = this.root;
    while(true){
      if(value === current.value) return undefined;
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        } 
        current = current.right;
      }
    }
  }

  DFSPreOrder(){
    var data = [];
    function traverse(node){
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.DFSPreOrder()) // [ 10, 6, 3, 8, 15, 20 ]


// POST ORDER DFS---------
// Create a variable to store the values of the visited nodes
// Store the root of the tree in a variable
// Write a helper function that accepts a node as parameter
// If the node has a left property, call helper function with left node as parameter
// If the node has a right property, call helper function with left node as parameter
// Call the helper function with the current node as parameter
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
    var newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while(true){
      if(value === current.value) return undefined;
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        } 
        current = current.right;
      }
    }
  }


  DFSPostOrder(){
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
}


var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.DFSPostOrder()) // [ 3, 8, 6, 20, 15, 10 ]

// IN ORDER DFS------------
// Create a variable to store the values of the visited nodes
// Store the root of the tree in a variable
// Write a helper function that accepts a node as parameter
// If the node has a left property, call helper function with left node as parameter
// Push the value of the node to the variable that stores values
// If the node has a right property, call helper function with left node as parameter
// Call the helper function with the current node as parameter
class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
    var newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while(true){
      if(value === current.value) return undefined;
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        } 
        current = current.right;
      }
    }
  }

  DFSInOrder(){
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}


var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.DFSInOrder()) // [ 3, 6, 8, 10, 15, 20 ]