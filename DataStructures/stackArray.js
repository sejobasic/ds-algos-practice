// Create a stack using array and add and remove nodes from stack
class Stack {
  constructor() {
    this.array = []
  }
  peek() { // See the very top node
    return this.array[this.array.length-1]
  }
  push(value) { // Add node to top of stack
    this.array.push(value)
    return this
  }
  pop() { // Remove node from top of stack
    this.array.pop()
    return this
  }
}

const myStack = new Stack()
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
myStack.peek()
myStack.pop()
myStack.pop()
myStack.pop()