"use strict";

function swap(ary, i, j) {
    var tmp = ary[i];
    ary[i] = ary[j];
    ary[j] = tmp;
}

function merge(ary1, ary2) {
    var result = [],
        i1 = 0,
        i2 = 0;
    while (i1 < ary1.length && i2 < ary2.length) {
        if (ary1[i1] < ary2[i2]) {
            result.push(ary1[i1++]);
        } else {
            result.push(ary2[i2++]);
        }
    }

    while (i1 < ary1.length) {
        result.push(ary1[i1++]);
    }

    while (i2 < ary2.length) {
        result.push(ary2[i2++]);
    }
    return result;
}

function merge_sort_rec(ary) {
    var len = ary.length,
        mid = Math.floor(len / 2),
        left, right;

    if (len === 0 || len === 1) {
        return ary;
    }

    left = ary.slice(0, mid);
    right = ary.slice(mid, len);
    return merge(merge_sort_rec(left), merge_sort_rec(right));
}

function partition(ary, left, right) {
    var mid = Math.floor((left + right) / 2),
        pivot = ary[mid],
        i = left,
        j = right;

    while (i <= j) {
        while (ary[i] < pivot) {
            i++;
        }
        while (ary[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(ary, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quick_sort_rec(ary, left, right) {
    var index;

    if (ary.length <= 1) {
        return ary;
    }

    index = partition(ary, left, right);
    if (left < index - 1) {
        quick_sort_rec(ary, left, index - 1);
    }

    if (index < right) {
        quick_sort_rec(ary, index + 1, right);
    }
    return ary;
}

var Sorting = {
    bobble_sort: function(ary) {
        if (!ary) {
            return null;
        }

        var len = ary.length,
            i, j;
        for (i = 0; i < len; i++) {
            for (j = 0; j < len - 1 - i; j++) {
                if (ary[j] > ary[j + 1]) {
                    swap(ary, j, j + 1);
                }
            }
        }
        return ary;
    },

    selection_sort: function(ary) {
        if (!ary) {
            return null;
        }

        var len = ary.length,
            indexMin, i, j;
        for (i = 0; i < len - 1; i++) {
            indexMin = i;
            for (j = i; j < len; j++) {
                if (ary[indexMin] > ary[j]) {
                    indexMin = j;
                }
            }

            if (i !== indexMin) {
                swap(ary, i, indexMin);
            }
        }
        return ary;
    },

    insertion_sort: function(ary) {
        if (!ary) {
            return null;
        }

        var len = ary.length,
            i, j, tmp;

        for (i = 1; i < len; i++) {
            j = i;
            tmp = ary[i];
            while (j > 0 && ary[j - 1] > tmp) {
                ary[j] = ary[j - 1];
                j -= 1;
            }
            ary[j] = tmp;
        }
        return ary;
    },

    merge_sort: function(ary) {
        if (!ary) {
            return null;
        }
        return merge_sort_rec(ary);
    },

    quick_sort: function(ary) {
        if (!ary) {
            return null;
        }
        return quick_sort_rec(ary, 0, ary.length - 1);
    }
};

module.exports = Sorting;
