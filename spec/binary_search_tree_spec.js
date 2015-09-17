"use strict";

var BinarySearchTree = require("../src/binary_search_tree.js");

describe("Test Binary Search Tree", function() {
    var bst;

    beforeEach(function() {
        bst = new BinarySearchTree();
    });

    it("should be empty with newly created tree", function() {
        expect(bst.size()).toEqual(0);
        expect(bst.empty()).toBeTruthy();
    });

    it("should not be empty with elements added", function() {
        bst.insert("a");
        expect(bst.size()).toEqual(1);
        expect(bst.empty()).toBeFalsy();

        bst.insert("b");
        expect(bst.size()).toEqual(2);
        expect(bst.empty()).toBeFalsy();

        bst.insert("b");
        expect(bst.size()).toEqual(3);
        expect(bst.empty()).toBeFalsy();
    });

    it("should contains the elements been added", function() {
        bst.insert("a");
        bst.insert("b");

        expect(bst.search("a")).toBeTruthy();
        expect(bst.search("b")).toBeTruthy();
        expect(bst.search("c")).toBeFalsy();
    });

    it("should remove the specified element", function() {

        bst.insert("c");
        bst.insert("a");
        bst.insert("a");
        bst.insert("b");
        bst.insert("d");

        bst.remove("a");
        expect(bst.search("a")).toBeTruthy();
        expect(bst.search("b")).toBeTruthy();
        expect(bst.size()).toEqual(4);

        bst.remove("a");
        expect(bst.search("a")).toBeFalsy();
        expect(bst.search("b")).toBeTruthy();
        expect(bst.size()).toEqual(3);

        bst.remove("a");
        expect(bst.size()).toEqual(3);
        expect(bst.search("b")).toBeTruthy();

        bst.remove("b");
        expect(bst.search("b")).toBeFalsy();
        expect(bst.size()).toEqual(2);

        bst.remove("d");
        expect(bst.search("d")).toBeFalsy();
        expect(bst.size()).toEqual(1);

        bst.remove("c");
        expect(bst.search("c")).toBeFalsy();
        expect(bst.size()).toEqual(0);
    });

    it("should find the min/max node", function() {
        expect(bst.min()).toBeNull();
        expect(bst.max()).toBeNull();

        bst.insert("c");
        expect(bst.min()).toEqual("c");
        expect(bst.max()).toEqual("c");

        bst.insert("b");
        bst.insert("d");

        expect(bst.min()).toEqual("b");
        expect(bst.max()).toEqual("d");
    });

    it("should return height of the tree", function() {
        expect(bst.height()).toEqual(-1);

        bst.insert("c");
        // one node of tree has height of 1
        expect(bst.height()).toEqual(0);

        bst.insert("b");
        expect(bst.height()).toEqual(1);
        bst.insert("d");
        expect(bst.height()).toEqual(1);

        bst.insert("a");
        expect(bst.height()).toEqual(2);
        bst.insert("e");
        expect(bst.height()).toEqual(2);
    });

    it("should return if the given tree is BST", function() {
        expect(bst.isBST()).toBeTruthy();

        bst.insert("c");
        expect(bst.isBST()).toBeTruthy();

        bst.insert("b");
        expect(bst.isBST()).toBeTruthy();

        bst.insert("d");
        expect(bst.isBST()).toBeTruthy();

        bst.reverse();
        expect(bst.isBST()).toBeFalsy();

        bst.insert("a");
        expect(bst.isBST()).toBeFalsy();
    });
});
