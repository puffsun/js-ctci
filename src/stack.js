"use strict";

function ThreeStack() {
    var data = [],
        index0 = 0,
        index1 = 1,
        index2 = 2;

    this.push = function(el, i) {
        switch (i) {
            case 0:
                data[index0] = el;
                index0 += 3;
                break;
            case 1:
                data[index1] = el;
                index1 += 3;
                break;
            case 2:
                data[index2] = el;
                index2 += 3;
                break;
            default:
                throw new Error("index is wrong.");
        }
    };

    this.pop = function(i) {
        switch (i) {
            case 0:
                index0 -= 3;
                return data[index0];
            case 1:
                index1 -= 3;
                return data[index1];
            case 2:
                index2 -= 3;
                return data[index2];
            default:
                throw new Error("index is wrong.");
        }
    };

    this.peek = function(i) {
        switch (i) {
            case 0:
                return data[index0 - 3];
            case 1:
                return data[index1 - 3];
            case 2:
                return data[index2 - 3];
            default:
                throw new Error("index is wrong.");
        }
    };
}

module.exports = (function() {
    return {
        ThreeStack : ThreeStack
    };
}());
