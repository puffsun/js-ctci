"use strict";

function is_equal(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function SinglyNode(data) {
    this.data = data;
    var nextNode = null,
        headNode = this;

    this.head = function() {
        return headNode;
    };

    this.next = function(n) {
        if (arguments.length > 0) {
            nextNode = n;
            return;
        }
        return nextNode;
    };

    this.append = function(data) {
        var end = new SinglyNode(data);
        var node = this;
        while (node.next() !== null) {
            node = node.next();
        }
        node.next(end);
    };

    this.length = function() {
        var node = this,
            count = 1;
        while (node.next() !== null) {
            node = node.next();
            count += 1;
        }
        return count;
    };

    this.exists = function(data) {
        var node = this;

        if (is_equal(node.data, data)) {
            return true;
        }

        while (node.next() !== null) {
            node = node.next();
            if (is_equal(node.data, data)) {
                return true;
            }
        }
        return false;
    };

    this.remove = function(data) {
        var current = this;
        if (is_equal(data, current.data)) {
            return current.next();
        }

        while (current.next() !== null) {
            var n = current.next();
            if (is_equal(data, n.data)) {
                current.next(n.next());
                return this.head();
            }
            current = current.next();
        }
        return this.head();
    };
}

function DoublyNode(data) {
    this.data = data;
    var nextNode = null,
        prevNode = null,
        headNode = this,
        tailNode = this;

    this.head = function() {
        return headNode;
    };

    this.tail = function() {
        return tailNode;
    };

    this.length = function() {
        var count = 1,
            current = this.head();

        while (current.next() !== null) {
            count += 1;
            current = current.next();
        }
        return count;
    };

    this.next = function(n) {
        if (arguments.length > 0) {
            nextNode = n;
            return;
        }
        return nextNode;
    };

    this.prev = function(n) {
        if (arguments.length > 0) {
            prevNode = n;
            return;
        }
        return prevNode;
    };

    this.append = function(data) {
        var node = new DoublyNode(data);
        node.prev(this.tail());
        this.tail().next(node);
        tailNode = node;
    };

    this.remove = function(data) {
        var current = this.head(),
            last = this.head();

        if (current.data === data) {
            headNode = current.next();
            return current.next();
        }

        while (current.next() !== null) {
            if (current.data === data) {
                var n = current.next();
                n.prev(last);
                if (n !== null) {
                    current.next(n.next());
                }
                return current;
            }
            current = current.next();
            last = current;
        }
        return current;
    };

    this.exists = function(data) {
        var current = this.head();

        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next();
        }
        return false;
    };
}

module.exports = (function() {

    var dedup = function(root) {
        if (!root) {
            return root;
        }
    };

    return {
        dedup      : dedup,
        SinglyNode : SinglyNode,
        DoublyNode : DoublyNode
    };
}());
