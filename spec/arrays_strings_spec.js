"use strict";

var array_string = require("../src/arrays_strings.js");

describe("Testing arrays and strings data structures", function() {

    describe("if given string is contains of all unique chars", function() {
        it("should return true for empty strings", function() {
            expect(array_string.unique_chars("")).toEqual(true);
            expect(array_string.unique_chars(null)).toEqual(true);
            expect(array_string.unique_chars(undefined)).toEqual(true);
        });

        it("should return false that not all unique chars", function() {
            expect(array_string.unique_chars("aab")).toEqual(false);
        });

        it("should return true for all unique chars", function() {
            expect(array_string.unique_chars("abcd")).toEqual(true);
        });

        it("should return false for string longer than 256", function() {
            var randomStrMaker = function(length) {
                var result = "",
                    candidates = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    i;
                for (i = 0; i < length; i++) {
                     result += candidates[Math.floor(Math.random() * candidates.length)];
                }
                return result;
            };

            var str = randomStrMaker(257);
            expect(array_string.unique_chars(str)).toEqual(false);
        });
    });

    describe("Testing reverse of a string", function() {
        it("should reverse a given string", function() {
            var reversed = array_string.reverse("abc");
            expect(reversed).toEqual("cba");
        });

        it("should return empty string or null", function() {
            expect(array_string.reverse(null)).toBeNull();
            expect(array_string.reverse("")).toEqual("");
            expect(array_string.reverse(undefined)).toBeUndefined();
        });
    });
});
