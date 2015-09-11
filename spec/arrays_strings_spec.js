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

    describe("Testing reverse of a string with naive algorithm", function() {
        it("should reverse a given string", function() {
            var reversed = array_string.naive_reverse("abc");
            expect(reversed).toEqual("cba");
        });

        it("should return empty string or null", function() {
            expect(array_string.naive_reverse(null)).toBeNull();
            expect(array_string.naive_reverse("")).toEqual("");
            expect(array_string.naive_reverse(undefined)).toBeUndefined();
        });

        it("should return wrong result with utf8 chars", function() {
            expect(array_string.naive_reverse("Lorem ipsum 𝌆 dolor sit ameͨ͆t.")).not.toEqual(".teͨ͆ma tis rolod 𝌆 muspi meroL");
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

        it("should return correct result with utf8 chars", function() {
            var input = 'Lorem ipsum 𝌆 dolor sit ameͨ͆t.';
            var reversed = '.t͆ͨema tis rolod 𝌆 muspi meroL';

            expect(array_string.reverse(input)).toEqual(reversed);

            input = "\uD800\uD801\uD802";
            reversed = "\uD802\uD801\uD800";

            expect(array_string.reverse(input)).toEqual(reversed);
        });
    });

    describe("Testing if one string is permutation of the other", function() {
        it("should return true for both empty or null strings", function() {
            expect(array_string.slow_permutation("", "")).toEqual(true);
            expect(array_string.slow_permutation(null, null)).toEqual(true);
            expect(array_string.slow_permutation(undefined, undefined)).toEqual(true);

            expect(array_string.slow_permutation("", null)).toEqual(true);
            expect(array_string.slow_permutation(null, undefined)).toEqual(true);
            expect(array_string.slow_permutation("", undefined)).toEqual(true);
        });

        it("should return false with non-permutations", function() {
             expect(array_string.slow_permutation("abc", "ab")).toEqual(false);
        });

        it("should return true with same strings", function() {
            expect(array_string.slow_permutation("ab", "ab")).toEqual(true);
        });

        it("should return true with permutations", function() {
            expect(array_string.slow_permutation("ab", "ba")).toEqual(true);
        });
    });
});
