// Create a stack and add and remove nodes from stack
class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  peek() { // See the very top node
    return this.top
  }
  push(value) { // Add node to top of stack
    const newNode = new Node(value) // Create a new node
    if (this.length === 0) { // If the stack is empty then point top and bottom to new node
      this.top = newNode
      this.bottom = newNode
    } else { 
      const holdingPointer =this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length++
    return this
  }
  pop() { // Remove node from top of stack
    if (!this.top) { // Check if there is an item in stack
      return null
    }
    if (this.top === this.bottom) { // After we remove the only node left we want null
      this.bottom = null
    }
    // const holdingPointer = this.top
    this.top = this.top.next // replace top node
    this.length--
    return this
  }
  isEmpty() { // Check if stack is empty

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