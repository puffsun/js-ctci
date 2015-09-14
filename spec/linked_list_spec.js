"use strict";

var list = require("../src/linked_list.js");

describe("Testing Linked List", function() {

    describe("Test singly linked list", function() {
        var Node, root;
        beforeEach(function() {
            Node = list.SinglyNode;
            root = new Node('a');
            root.append('b');
        });

        it("should respond to function call", function() {
            expect(root.append).not.toBeUndefined();
            expect(root.next).not.toBeUndefined();
            expect(root.length).not.toBeUndefined();
            expect(root.exists).not.toBeUndefined();
            expect(root.remove).not.toBeUndefined();
            expect(root.head).not.toBeUndefined();
        });

        it("should contains data pushed in", function() {
            expect(root.length()).toEqual(2);
            expect(root.exists('a')).toBeTruthy();
            expect(root.exists('b')).toBeTruthy();

            root.append('c');
            expect(root.length()).toEqual(3);
            expect(root.exists('a')).toBeTruthy();
            expect(root.exists('b')).toBeTruthy();
            expect(root.exists('c')).toBeTruthy();
            expect(root.exists('d')).toBeFalsy();
            expect(root.head().data).toEqual('a');
        });

        it("should remove specified node", function() {
            expect(root.head().data).toEqual('a');

            root = root.remove('a');
            expect(root.head().data).toEqual('b');

            root.append('c');
            root.append('d');
            root.append('e');
            root = root.remove('b');
            expect(root.head().data).toEqual('c');

            root = root.remove('e');
            expect(root.head().data).toEqual('c');
            expect(root.length()).toEqual(2);

            root = root.remove('f');
            expect(root.head().data).toEqual('c');
            expect(root.length()).toEqual(2);
        });
    });

    describe("Testing doubly linked list", function() {
        var Node, root;

        beforeEach(function() {
            Node = list.DoublyNode;
            root = new Node('a');
            root.append('b');
        });

        it("should respond to function call", function() {
            expect(root.append).not.toBeUndefined();
            expect(root.next).not.toBeUndefined();
            expect(root.prev).not.toBeUndefined();
            expect(root.length).not.toBeUndefined();
            expect(root.exists).not.toBeUndefined();
            expect(root.remove).not.toBeUndefined();
            expect(root.head).not.toBeUndefined();
            expect(root.tail).not.toBeUndefined();
        });

        it("should contains the elements that been pushed in", function() {
            expect(root.head().data).toEqual('a');
            expect(root.next().data).toEqual('b');
            expect(root.tail().data).toEqual('b');
            expect(root.tail().prev().next().data).toEqual('b');
            expect(root.length()).toEqual(2);
            expect(root.exists('a')).toBeTruthy();
            expect(root.exists('b')).toBeTruthy();
            expect(root.exists('c')).toBeFalsy();
        });

        it("should remove data been specified", function() {
            root = root.remove('a');
            expect(root.length()).toEqual(1);
            expect(root.exists('a')).toBeFalsy();
            expect(root.exists('b')).toBeTruthy();

            root = root.remove('a');
            expect(root.length()).toEqual(1);
            expect(root.exists('a')).toBeFalsy();
            expect(root.exists('b')).toBeTruthy();

            root.append('c');
            root.append('d');
            root.append('e');
            root.append('f');
            expect(root.length()).toEqual(5);

            root = root.remove('f');
            expect(root.length()).toEqual(4);
        });
    });

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
