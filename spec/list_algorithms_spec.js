"use strict";

var list = require("../src/list_algorithms.js");

describe("Testing Linked List", function() {

    describe("Remove duplicates from unsorted linked list", function() {
        it("should return original node with empty or null", function() {
            expect(list.dedup(undefined)).toBeUndefined();
            expect(list.dedup(null)).toBeNull();
        });

        it("should dedup linked list", function() {
            // TODO
        });
    });
});
