"use strict";

var list = require("./lists.js");

function list_equals(node1, node2) {
    if ((!node1 && !node2)) {
        return true;
    }

    if (node1.length() !== node2.length()) {
        return false;
    }

    var c1 = node1.head(),
        c2 = node2.head();
    while (c1 !== null && c2 !== null) {
        if (c1.data !== c2.data) {
            return false;
        }
        c1 = c1.next();
        c2 = c2.next();
    }

    return true;
}

function dedup_slow(root) {
    if (!root) {
        return root;
    }

    var c1 = root.head(),
        l1 = root.head(),
        l2 = root.head(),
        c2;
    while (c1 !== null) {
        c2 = c1.next();
        while (c2 !== null) {
            if (c1.data === c2.data) {
                l2.next(c2.next());
                if (c2.next() === null) {
                    break;
                } else {
                    c2 = c2.next();
                    continue;
                }
            }
            l2 = c2;
            c2 = c2.next();
        }
        l1 = c1;
        c1 = c1.next();
    }
    return root;
}

function dedup(root) {
    if (!root) {
        return root;
    }

    var container = {},
        current = root.head(),
        k, result, keys;
    while (current !== null) {
        container[JSON.stringify(current)] = current.data;
        current = current.next();
    }

    keys = Object.keys(container);
    result = new list.SinglyNode(container[keys[0]]);
    delete container[keys[0]];

    for (k in container) {
        if (container.hasOwnProperty(k)) {
            result.append(container[k]);
        }
    }
    return result;
}

function last_kth(root, k) {
    if (!root) {
        return -1;
    }

    if (k < 0) {
        throw new Error("Minus k");
    }

    if (k >= root.length()) {
        throw new Error("k too large");
    }

    var current = root.head(),
        count = 0,
        back = root.head();
    while (current != null) {
        if (count > k) {
            back = back.next();
        }
        count += 1;
        current = current.next();
    }
    return back.data;
}

function palindrome(root) {
    if (!root) {
        return true;
    }

    var fast = root.head(),
        slow = root.head(),
        first_half = [];

    while (fast !== null && fast.next() !== null) {
        first_half.push(slow.data);
        slow = slow.next();
        fast = fast.next().next();
    }

    if (fast !== null) {
        slow = slow.next();
    }

    while (slow !== null) {
        if (first_half.pop() !== slow.data) {
            return false;
        }
        slow = slow.next();
    }
    return true;
}

module.exports = (function() {

    return {
        dedup_slow  : dedup_slow,
        list_equals : list_equals,
        dedup       : dedup,
        last_kth    : last_kth,
        palindrome  : palindrome
    };
}());
