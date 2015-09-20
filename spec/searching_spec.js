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
});
