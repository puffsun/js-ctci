"use strict";

var algs = require('../src/stack.js');

describe("Testing Stack algorithms", function() {
    describe("the ThreeStack data structure", function() {
        var ts;
        beforeEach(function() {
            ts = new algs.ThreeStack();
            ts.push('a', 0);
            ts.push('b', 1);
            ts.push('c', 2);
        });

        it("should throw error for index other than 0, 1, 2", function() {
            expect(function() {ts.push('a', -1);}).toThrow(new Error("index is wrong."));
            expect(function() {ts.push('a', 3);}).toThrow(new Error("index is wrong."));

            expect(function() {ts.peek(3);}).toThrow(new Error("index is wrong."));
            expect(function() {ts.peek(-1);}).toThrow(new Error("index is wrong."));

            expect(function() {ts.pop(3);}).toThrow(new Error("index is wrong."));
            expect(function() {ts.pop(-1);}).toThrow(new Error("index is wrong."));
        });

        it("should behave like three stacks", function() {
            expect(ts.peek(0)).toEqual('a');
            expect(ts.peek(1)).toEqual('b');
            expect(ts.peek(2)).toEqual('c');

            expect(ts.pop(0)).toEqual('a');
            expect(ts.pop(1)).toEqual('b');
            expect(ts.pop(2)).toEqual('c');

            expect(ts.pop(0)).toEqual(undefined);
            expect(ts.pop(1)).toEqual(undefined);
            expect(ts.pop(2)).toEqual(undefined);
        });
    });

    describe("The MinStack data structure", function() {
        var ms;
        beforeEach(function() {
            ms = new algs.MinStack();
            ms.push(3);
            ms.push(1);
            ms.push(2);
        });

        it("should contains the elements been pushed", function() {
            expect(ms.peek()).toEqual(2);
            expect(ms.pop()).toEqual(2);
        });

        it("should return min element with O(1)", function() {
            expect(ms.min()).toEqual(1);
            expect(ms.pop()).toEqual(2);
            expect(ms.min()).toEqual(1);
            expect(ms.pop()).toEqual(1);
            expect(ms.min()).toEqual(3);
            expect(ms.pop()).toEqual(3);
            expect(ms.min()).toEqual(Number.MAX_VALUE);
        });
    });
});

