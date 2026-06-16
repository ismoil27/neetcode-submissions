class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class MyDeque {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
    return this.length === 0;
    }

    /**
     * @param {number} value
     */ 
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
        this.first = node;
        this.last = node;
        } else {
            node.prev = this.last;
            this.last.next = node;
            this.last = node;
        }
        this.length++; 
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
        this.first = node;
        this.last = node;
        } else {
            node.next = this.first;
            this.first.prev = node;
            this.first = node;
        }
        this.length++;
    }

    /**
     * @return {void}
     */ 
    pop() {
        if(this.isEmpty()) return -1;
        const val = this.last.val;
     if(this.length === 1) {
        this.first = this.last = null;
     } else {
        this.last = this.last.prev;
        this.last.next = null;
     }
     this.length--;
     return val;
    }

    /**
     * @return {number}
     */
    popleft() {
       if(this.isEmpty()) return -1;
       const val = this.first.val;
     if(this.length === 1) {
        this.first = this.last = null;
     } else {
        this.first = this.first.next;
        this.first.prev = null;
     }

     this.length--;
     return val;
    }
}
