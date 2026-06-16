
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    }


    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index < 0 || index >= this.length) return -1;
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return null
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
			this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return null
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) this.tail = null;
      return true;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    if (curr && curr.next) {
      if (curr.next === this.tail) {
        this.tail = curr;
      }
      curr.next = curr.next.next;
      this.length--;
      return true;
    }

    return false;
  }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = [];
        let current = this.head;
        while(current) {
            values.push(current.value);
            current = current.next
        }
        return values;
    }
}
