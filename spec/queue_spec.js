
var algs = require("../src/queue.js");

describe("Queues tests", function() {
    describe("Testing queue by two stacks", function() {
        var my_queue;

        beforeEach(function() {
            my_queue = new algs.MyQueue();
        });

        it("should respond to queue interfaces", function() {
            expect(my_queue.enq).not.toBeUndefined();
            expect(my_queue.deq).not.toBeUndefined();
            expect(my_queue.is_empty).not.toBeUndefined();
        });

        it("should behaves like a queue", function() {
            my_queue.enq('a');
            expect(my_queue.is_empty()).toBeFalsy();
            expect(my_queue.deq()).toEqual('a');
            expect(my_queue.is_empty()).toBeTruthy();

            my_queue.enq('a');
            my_queue.enq('b');
            my_queue.enq('c');
            expect(my_queue.deq()).toEqual('a');
            expect(my_queue.deq()).toEqual('b');
            expect(my_queue.deq()).toEqual('c');
        });
    });
});
