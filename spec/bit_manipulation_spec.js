"use strict";

var bits = require('../src/bit_manipulation.js');

describe("Testing bit operations", function() {
    describe("common bit operations",function() {
        it("should return bit at index", function() {
            expect(bits.get_bit(10, 3)).toEqual(1);
            expect(bits.get_bit(10, 2)).toEqual(0);
            expect(bits.get_bit(10, 1)).toEqual(1);
            expect(bits.get_bit(10, 0)).toEqual(0);
        });

        it("should set bit at index", function() {
            expect(bits.set_bit(10, 0)).toEqual(11);
            expect(bits.set_bit(10, 1)).toEqual(10);
            expect(bits.set_bit(10, 2)).toEqual(14);
            expect(bits.set_bit(10, 3)).toEqual(10);
        });

        it("should clear bit at index", function() {
            expect(bits.clear_bit(10, 0)).toEqual(10);
            expect(bits.clear_bit(10, 1)).toEqual(8);
            expect(bits.clear_bit(10, 2)).toEqual(10);
            expect(bits.clear_bit(10, 3)).toEqual(2);
        });

        it("should update bit at index", function() {
            expect(bits.update_bit(10, 0, 1)).toEqual(11);
            expect(bits.update_bit(10, 1, 0)).toEqual(8);
            expect(bits.update_bit(10, 2, 1)).toEqual(14);
            expect(bits.update_bit(10, 3, 0)).toEqual(2);
        });

        it("should clear given range of bits", function() {
            expect(bits.clear_bits_msb(10, 0)).toEqual(0);
            expect(bits.clear_bits_msb(10, 1)).toEqual(0);
            expect(bits.clear_bits_msb(10, 2)).toEqual(2);
            expect(bits.clear_bits_msb(10, 3)).toEqual(2);

            expect(bits.clear_bits_thru_zero(10, 0)).toEqual(10);
            expect(bits.clear_bits_thru_zero(10, 1)).toEqual(8);
            expect(bits.clear_bits_thru_zero(10, 2)).toEqual(8);
            expect(bits.clear_bits_thru_zero(10, 3)).toEqual(0);
        });
    });
});
