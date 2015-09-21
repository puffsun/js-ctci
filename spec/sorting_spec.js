"use strict";

var Sorting = require("../src/sorting");

describe("Testing sorting algorithms", function() {
    describe("Testing bubble sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.bobble_sort(null)).toEqual(null);
            expect(Sorting.bobble_sort([])).toEqual([]);
            expect(Sorting.bobble_sort([1])).toEqual([1]);
            expect(Sorting.bobble_sort([1, 2])).toEqual([1, 2]);
            expect(Sorting.bobble_sort([2, 1])).toEqual([1, 2]);
        });
    });

    describe("Testing selection sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.selection_sort(null)).toEqual(null);
            expect(Sorting.selection_sort([])).toEqual([]);
            expect(Sorting.selection_sort([1])).toEqual([1]);
            expect(Sorting.selection_sort([1, 2])).toEqual([1, 2]);
            expect(Sorting.selection_sort([2, 1])).toEqual([1, 2]);
        });
    });

    describe("Testing insertion sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.insertion_sort(null)).toEqual(null);
            expect(Sorting.insertion_sort([])).toEqual([]);
            expect(Sorting.insertion_sort([1])).toEqual([1]);
            expect(Sorting.insertion_sort([1, 2])).toEqual([1, 2]);
            expect(Sorting.insertion_sort([2, 1])).toEqual([1, 2]);
        });
    });

    describe("Testing merge sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.merge_sort(null)).toEqual(null);
            expect(Sorting.merge_sort([])).toEqual([]);
            expect(Sorting.merge_sort([1])).toEqual([1]);
            expect(Sorting.merge_sort([1, 2])).toEqual([1, 2]);
            expect(Sorting.merge_sort([2, 1])).toEqual([1, 2]);
        });
    });

    describe("Testing quick sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.quick_sort(null)).toEqual(null);
            expect(Sorting.quick_sort([])).toEqual([]);
            expect(Sorting.quick_sort([1])).toEqual([1]);
            expect(Sorting.quick_sort([1, 2])).toEqual([1, 2]);
            expect(Sorting.quick_sort([2, 1])).toEqual([1, 2]);
            expect(Sorting.quick_sort([2, 1, 5, 3])).toEqual([1, 2, 3, 5]);
            expect(Sorting.quick_sort([2, 1, 5, 3, 1, 3])).toEqual([1, 1, 2, 3, 3, 5]);
            expect(Sorting.quick_sort([8, 6, 2, 4, 1, 5, 7, 3])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        });
    });
});
