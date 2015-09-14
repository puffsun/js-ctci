"use strict";

var list = require("../src/lists.js");
var algs = require("../src/list_algorithms.js");

describe("Testing Linked List", function() {

    describe("List equals", function() {
        var l1, l2;
        beforeEach(function() {
            l1 = new list.SinglyNode('a');
            l1.append('b');
            l1.append('c');
            l1.append('d');

            l2 = new list.SinglyNode('a');
            l2.append('b');
            l2.append('c');
            l2.append('d');
        });

        it("should equal for empty or null lists", function() {
            expect(algs.list_equals(null, null)).toBeTruthy();
            expect(algs.list_equals(undefined, null)).toBeTruthy();
            expect(algs.list_equals(null, "")).toBeTruthy();
            expect(algs.list_equals(undefined, "")).toBeTruthy();
        });

        it("should return true for two lists with same nodes", function() {
            expect(algs.list_equals(l1, l2)).toBeTruthy();

            l2.append('e');
            expect(algs.list_equals(l1, l2)).toBeFalsy();

            l1.append('f');
            expect(algs.list_equals(l1, l2)).toBeFalsy();
        });
    });

    describe("Remove duplicates from unsorted linked list", function() {
        var root, de_root;
        beforeEach(function() {
            root = new list.SinglyNode('a');
            root.append('b');
            root.append('c');

            de_root = new list.SinglyNode('a');
            de_root.append('b');
            de_root.append('c');
        });

        it("should return original node with empty or null", function() {
            expect(algs.dedup(undefined)).toBeUndefined();
            expect(algs.dedup(null)).toBeNull();
        });

        it("should dedup linked list", function() {
            var result = algs.dedup(root);
            expect(algs.list_equals(result, root)).toBeTruthy();

            root.append('a');
            result = algs.dedup(root);
            expect(algs.list_equals(result, de_root)).toBeTruthy();

            //root.append('a');
            //root.append('a');
            //result = algs.dedup(root);
            //expect(algs.list_equals(result, de_root)).toBeTruthy();
        });
    });
});
