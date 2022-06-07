// Create a queue wait list of patrons in line
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null // First in line
    this.last = null // Last in line
    this.length = 0
  }
  peek() {
    return this.first
  }
  enqueue(value) { // Add to the queue
    const newNode = new Node(value)
    if (this.length === 0) { // If there is nothing in our queue
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode // Instead of pointing to null point to the new node as last in line
      this.last = newNode
    }
    this.length++ // Increase the length by 1
  }
  dequeue() { // Remove node from the front of the queue
    if (!this.first) { // If the queue is empty return null
      return null
    }
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next // Whoever is after joy we want to be first priority now which is matt after removing joy
    this.length-- // Decrease length
    return this
  }
}

const myQueue = new Queue()
myQueue.enqueue('joy')
myQueue.enqueue('matt')
myQueue.enqueue('richard')
myQueue.peek()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
