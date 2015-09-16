
function MyQueue() {
    var st1 = [],
        st2 = [];

    this.enq = function(el) {
        st1.push(el);
    };

    this.deq = function() {
        if (st2.length === 0) {
            while (st1.length > 0) {
                st2.push(st1.pop());
            }
        }
        return st2.pop();
    };

    this.is_empty = function() {
        return st1.length === 0 && st2.length === 0;
    };
}

module.exports = (function() {
    return {
        MyQueue: MyQueue
    };
}());
