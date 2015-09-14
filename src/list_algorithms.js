"use strict";

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

function dedup(root) {
    if (!root) {
        return root;
    }

    var c1 = root.head(),
        l1 = root.head(),
        l2 = root.head(),
        c2;
    while (c1 !== null) {
        c2 = c1.next();
        //console.log("c1: " + JSON.stringify(c1));
        while (c2 !== null) {
            //console.log("c2: " + JSON.stringify(c2));
            if (c1.data === c2.data) {
                l2.next(c2.next());
                if (c2.next() === null) {
                    break;
                } else {
                    c2 = c2.next();
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

module.exports = (function() {

    return {
        dedup      : dedup,
        list_equals : list_equals
    };
}());
