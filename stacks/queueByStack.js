function Queue() {
  this.s1 = [];
  this.s2 = [];
}

Queue.prototype.push = function(x) {
  this.s1.push(x);
}

Queue.prototype.pop = function() {
  while(this.s1.length !== 1) {
    this.s2.push(this.s1.pop());
  }

  let popped = this.s1.pop();

  while (this.s2.length) {
    this.s1.push(this.s2.pop());
  }

  return popped;
}

Queue.prototype.peek = function() {
  while(this.s1.length) {
    this.s2.push(this.s1.pop());
  }

  let peeked = this.s2.pop();
  this.s1.push(peeked);

  while(this.s2.length) {
    this.s1.push(this.s2.pop());
  }

  return peeked;
}

Queue.prototype.empty = function() {
  return (!this.s1.length && !this.s2.length)
}