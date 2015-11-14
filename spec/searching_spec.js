"use strict";

var search = require("../src/searching");

describe("Test searching", function() {
    describe("test sequential searching", function() {
        it("should return null for null", function() {
            expect(search.sequential_search(null, null)).toEqual(null);
        });

        it("should return -1 for empty collection", function() {
            expect(search.sequential_search([], "a")).toEqual(-1);
        });

        it("should return -1 for non-existing element", function() {
            expect(search.sequential_search(["b", "c"], "a")).toEqual(-1);
        });

        it("should return the element been searching", function() {
            expect(search.sequential_search(["b", "c"], "c")).toEqual(1);
        });
    });

    describe("test binary searching", function() {
        it("should return null for null", function() {
            expect(search.binary_search(null, null)).toEqual(null);
        });

        it("should return -1 for empty collection", function() {
            expect(search.binary_search([], "a")).toEqual(-1);
        });

        it("should return -1 for non-existing element", function() {
            expect(search.binary_search(["b", "c"], "a")).toEqual(-1);
        });

        it("should return the element been searching", function() {
            expect(search.binary_search(["b", "c"], "c")).toEqual(1);
        });
    });

    describe("searching sorted and rotated array", function() {
        var ary, ary1, ary2;
        beforeEach(function() {
            ary = [2, 3, 2, 2, 2, 2, 2, 2, 2, 2];
            ary1 = [10, 15, 20, 0, 5];
            ary2 = [50, 5, 20, 30, 40];
        });
        it("should return result if exists", function() {
            expect(search.search_sorted_rotated_array(ary, 2)).toEqual(4);
            expect(search.search_sorted_rotated_array(ary, 3)).toEqual(1);
            expect(search.search_sorted_rotated_array(ary, 4)).toEqual(-1);
            expect(search.search_sorted_rotated_array(ary, 1)).toEqual(-1);
            expect(search.search_sorted_rotated_array(ary, 8)).toEqual(-1);

            expect(search.search_sorted_rotated_array(ary1, 0)).toEqual(3);
            expect(search.search_sorted_rotated_array(ary1, 15)).toEqual(1);
            expect(search.search_sorted_rotated_array(ary1, 20)).toEqual(2);
            expect(search.search_sorted_rotated_array(ary1, 5)).toEqual(4);

            expect(search.search_sorted_rotated_array(ary2, 50)).toEqual(0);
            expect(search.search_sorted_rotated_array(ary2, 5)).toEqual(1);
            expect(search.search_sorted_rotated_array(ary2, 20)).toEqual(2);
            expect(search.search_sorted_rotated_array(ary2, 30)).toEqual(3);
        });
    });
});
