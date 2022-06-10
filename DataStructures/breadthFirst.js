// this kind of traversal will iterate through our data structure in a "horizontal way
// Create a queue and a variable to store the nodes that have been "visited"
// Place the root node inside the queue
// Keep looping as long as there's anything in the queue
// Dequeue a node from the queue and push the value of the node into the variable that stores the visited nodes
// If there's a left property on the dequeued node, add it to the queue
// If there's a right property on the dequeued node, add it to the queue

class Node {
  constructor(value) {
      this.value = value
      this.left = null
      this.right = null
  }
}

class BinarySearchTree {
  constructor(){ this.root = null; }

  insert(value){
      let newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      let current = this.root;
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

  BFS(){
      let node = this.root,
          data = [],
          queue = [];
      queue.push(node);

      while(queue.length){
         node = queue.shift();
         data.push(node.value);
         if(node.left) queue.push(node.left);
         if(node.right) queue.push(node.right);
      }
      return data;
  }
}


const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.BFS()) // [ 10, 6, 15, 3, 8, 20 ]