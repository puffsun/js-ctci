"use strict";

var sort = require('./sorting');

function binary_search_rec(ary, low, high, e) {
    if (low > high) {
        return -1;
    }
    var mid = Math.floor((low + high) / 2);
    if (e > ary[mid]) {
        return binary_search_rec(ary, mid + 1, high, e);
    } else if (e < ary[mid]) {
        return binary_search_rec(ary, low, mid - 1, e);
    } else {
        return mid;
    }
}

function search_sorted_rotated_array_rec(ary, left, right, e) {
    var mid = Math.floor((left + right) / 2);
    if (e === ary[mid]) {
        return mid;
    }

    if (left > right) {
        return -1;
    }

    // Either left or right half of the array must be normally ordered
    // after been rotated. Let's find which side is normally ordered,
    // then use the ordered half to figure out which side we should
    // try to find the target element.
    if (ary[left] < ary[mid]) {
        if (e >= ary[left] && e <= ary[mid]) {
            // left half is normally ordered.
            return search_sorted_rotated_array_rec(ary, left, mid - 1, e);
        } else {
            return search_sorted_rotated_array_rec(ary, mid + 1, right, e);
        }
    } else if (ary[mid] < ary[left]) {
        // right half is normally ordered.
        if (e >= ary[mid] && e <= ary[right]) {
            return search_sorted_rotated_array_rec(ary, mid + 1, right, e);
        } else {
            return search_sorted_rotated_array_rec(ary, left, mid - 1, e);
        }
    } else if (ary[left] === ary[mid]) {
        // left side is all repeats
        if (ary[mid] !== ary[right]) {
            // if right half is different, search it.
            return search_sorted_rotated_array_rec(ary, mid + 1, right, e);
        } else {
            // search both sides
            var result = search_sorted_rotated_array_rec(ary, left, mid - 1, e);
            if (result === -1) {
                return search_sorted_rotated_array_rec(ary, mid + 1, right, e);
            }
            return result;
        }
    }
    return -1;
}

var search = {
    sequential_search: function(ary, e) {
        if (!ary) {
            return null;
        }

        var index, len;
        for (index = 0, len = ary.length; index < len; index++) {
            if (ary[index] === e) {
                return index;
            }
        }
        return -1;
    },

    binary_search: function(ary, e) {
        if (!ary) {
            return null;
        }

        ary = sort.quick_sort(ary);
        return binary_search_rec(ary, 0, ary.length - 1, e);
    },

    search_sorted_rotated_array: function(ary, e) {
        if (!ary) {
            return;
        }
        return search_sorted_rotated_array_rec(ary, 0, ary.length - 1, e);
    }
};

module.exports = search;
