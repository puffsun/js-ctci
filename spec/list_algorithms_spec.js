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
            root.append('d');

            de_root = new list.SinglyNode('a');
            de_root.append('b');
            de_root.append('c');
            de_root.append('d');
        });

        it("should return original node with empty or null", function() {
            expect(algs.dedup_slow(undefined)).toBeUndefined();
            expect(algs.dedup_slow(null)).toBeNull();

            expect(algs.dedup(undefined)).toBeUndefined();
            expect(algs.dedup(null)).toBeNull();
        });

        it("should dedup(slow) linked list", function() {
            var result = algs.dedup_slow(root);
            expect(algs.list_equals(result, root)).toBeTruthy();

            root.append('a');
            result = algs.dedup_slow(root);
            expect(algs.list_equals(result, de_root)).toBeTruthy();

            root.append('a');
            root.append('a');
            result = algs.dedup_slow(root);
            expect(algs.list_equals(result, de_root)).toBeTruthy();

            root.append('a');
            root.append('e');
            de_root.append('e');
            result = algs.dedup_slow(root);
            expect(algs.list_equals(result, de_root)).toBeTruthy();
        });

        it("should dedup(fast) linked list", function() {
            var result = algs.dedup(root);
            expect(result.length()).toEqual(4);
            expect(result.exists('a')).toBeTruthy();
            expect(result.exists('b')).toBeTruthy();
            expect(result.exists('c')).toBeTruthy();
            expect(result.exists('d')).toBeTruthy();

            root.append('a');
            result = algs.dedup(root);
            expect(result.length()).toEqual(4);
            expect(result.exists('a')).toBeTruthy();
            expect(result.exists('b')).toBeTruthy();
            expect(result.exists('c')).toBeTruthy();
            expect(result.exists('d')).toBeTruthy();

            root.append('a');
            root.append('a');
            result = algs.dedup(root);
            expect(result.length()).toEqual(4);
            expect(result.exists('a')).toBeTruthy();
            expect(result.exists('b')).toBeTruthy();
            expect(result.exists('c')).toBeTruthy();
            expect(result.exists('d')).toBeTruthy();

            root.append('a');
            root.append('e');
            result = algs.dedup(root);
            expect(result.length()).toEqual(5);
            expect(result.exists('a')).toBeTruthy();
            expect(result.exists('b')).toBeTruthy();
            expect(result.exists('c')).toBeTruthy();
            expect(result.exists('d')).toBeTruthy();
            expect(result.exists('e')).toBeTruthy();
        });
    });

    describe("Testing the kth to last element", function() {
        var root;
        beforeEach(function() {
            root = new list.SinglyNode('a');
            root.append('b');
            root.append('c');
            root.append('d');
        });

        it("should return -1 for empty or null object", function() {
            expect(algs.last_kth(null, 1)).toEqual(-1);
            expect(algs.last_kth(undefined, 1)).toEqual(-1);
        });

        it("should throw error with minus k", function() {
            expect(function() {algs.last_kth(root, -1);}).toThrow(new Error("Minus k"));
            expect(function() {algs.last_kth(root, -10);}).toThrow(new Error("Minus k"));
        });

        it("should throw error if k > the length of list", function() {
            expect(function() {algs.last_kth(root, 4);}).toThrow(new Error("k too large"));
            expect(function() {algs.last_kth(root, 5);}).toThrow(new Error("k too large"));
        });

        it("should return the last kth element", function() {
            expect(algs.last_kth(root, 1)).toEqual('c');
            expect(algs.last_kth(root, 2)).toEqual('b');
            expect(algs.last_kth(root, 0)).toEqual('d');
        });
    });
});
