"use strict";

var algs = require('../src/stack.js');

describe("Testing ThreeStack", function() {
    describe("the data structure", function() {
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
});
