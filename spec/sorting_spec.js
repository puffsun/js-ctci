"use strict";

var Sorting = require("../src/sorting");

describe("Test sorting algorithms", function() {
    describe("Test bubble sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.bobble_sort(null)).toEqual(null);
            expect(Sorting.bobble_sort([])).toEqual([]);
            expect(Sorting.bobble_sort([1])).toEqual([1]);
            expect(Sorting.bobble_sort([1, 2])).toEqual([1, 2]);
            expect(Sorting.bobble_sort([2, 1])).toEqual([1, 2]);
        });
    });

    describe("Test selection sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.selection_sort(null)).toEqual(null);
            expect(Sorting.selection_sort([])).toEqual([]);
            expect(Sorting.selection_sort([1])).toEqual([1]);
            expect(Sorting.selection_sort([1, 2])).toEqual([1, 2]);
            expect(Sorting.selection_sort([2, 1])).toEqual([1, 2]);
        });
    });

    describe("Test insertion sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.insertion_sort(null)).toEqual(null);
            expect(Sorting.insertion_sort([])).toEqual([]);
            expect(Sorting.insertion_sort([1])).toEqual([1]);
            expect(Sorting.insertion_sort([1, 2])).toEqual([1, 2]);
            expect(Sorting.insertion_sort([2, 1])).toEqual([1, 2]);
        });
    });

    describe("Test merge sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.merge_sort(null)).toEqual(null);
            expect(Sorting.merge_sort([])).toEqual([]);
            expect(Sorting.merge_sort([1])).toEqual([1]);
            expect(Sorting.merge_sort([1, 2])).toEqual([1, 2]);
            expect(Sorting.merge_sort([2, 1])).toEqual([1, 2]);
        });
    });

    describe("Test quick sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.quick_sort(null)).toEqual(null);
            expect(Sorting.quick_sort([])).toEqual([]);
            expect(Sorting.quick_sort([1])).toEqual([1]);
            expect(Sorting.quick_sort([1, 2])).toEqual([1, 2]);
            expect(Sorting.quick_sort([2, 1])).toEqual([1, 2]);
            expect(Sorting.quick_sort([2, 1, 5, 3])).toEqual([1, 2, 3, 5]);
        });
    });
});
