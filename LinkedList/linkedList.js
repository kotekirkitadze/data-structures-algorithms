class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let temp = this.head;
		let pre = this.head;
		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}
		this.tail = pre;
		this.tail.next = null;
		--this.length;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return temp;
	}

	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	shift() {
		if (!this.head) return undefined;
		let temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return temp;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let temp = this.head;
		for (let i = 0; i < index; ++i) {
			temp = temp.next;
		}

		return temp;
	}

	set(value, index) {
		let temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		}
		return false;
	}
	insert(index, value) {
		if (index === 0) return this.unshift(value);
		if (index == this.length) return this.push(value);
		if (index < 0 || index > this.length) return false;
		const temp = this.get(index - 1);
		let newNode = new Node(value);
		newNode.next = temp.next;
		temp.next = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		// 0 1 2 3 4 5
		if (index === 0) return this.shift();
		if (index == this.length - 1) return this.pop();
		if (index < 0 || index >= this.length) return false;

		let prev = this.get(index - 1);
		let temp = prev.next;
		prev.next = temp.next;
		temp.next = null;
		this.length--;
		return temp;
	}

	reverse() {
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;

		let next = temp.next;
		let prev = null;

		for (let i = 0; i < this.length; ++i) {
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}
		return this;
	}
}

const linkedList = new LinkedList(0);
linkedList.push(1);

linkedList.push(2);
console.log(linkedList.reverse());
// console.log(linkedList.insert(2, 2));
// console.log(linkedList);
