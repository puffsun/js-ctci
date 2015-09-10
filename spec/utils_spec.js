'use strict';

var utils = require("../src/utils.js");

describe('Testing utils', function() {

    describe('compare binary to hex', function() {
        it('should compare bin with hex', function() {
            var num_str1 = "1010",
                num_str2 = "A";

            expect(utils.compare_bin_to_hex(num_str1, num_str2)).toEqual(true);

            num_str1 = "23";
            num_str2 = "G";
            expect(utils.compare_bin_to_hex(num_str1, num_str2)).toEqual(false);
        });

        it("should return false on unexpected arguments", function() {
            expect(utils.compare_bin_to_hex("11001011", "AA" )).toEqual(false);
        });
    });

    describe("convert value to base", function() {
        it("should convert the value to decimal value", function() {
            var num_str = "1010";
            expect(utils.convert_to_base(num_str, 2)).toEqual(10);

            num_str = "AB";
            expect(utils.convert_to_base(num_str, 16)).toEqual(171);
        });

        it("should return -1 on unexpected arguments", function() {
            expect(utils.convert_to_base("G", 16)).toEqual(-1);
            expect(utils.convert_to_base("2", 2)).toEqual(-1);
            expect(utils.convert_to_base("9", 8)).toEqual(-1);
            expect(utils.convert_to_base("9", 1)).toEqual(-1);
            expect(utils.convert_to_base("9", 17)).toEqual(-1);
        });
    });

    describe("convert digit to value", function() {
        it("should convert char to number", function() {
            var c = 'A';
            expect(utils.digit_to_value(c)).toEqual(10);

            c = 'F';
            expect(utils.digit_to_value(c)).toEqual(15);

            c = 'C';
            expect(utils.digit_to_value(c)).toEqual(12);

            c = 'a';
            expect(utils.digit_to_value(c)).toEqual(10);

            c = 'f';
            expect(utils.digit_to_value(c)).toEqual(15);

            c = 'b';
            expect(utils.digit_to_value(c)).toEqual(11);
        });
    });
});
