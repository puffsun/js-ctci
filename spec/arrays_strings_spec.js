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

            var data = [
                {
                    'description': 'Nothing special',
                    'input': 'ma\xF1ana',
                    'expected': 'ana\xF1am'
                },
                {
                    'description': 'Combining mark',
                    'input': 'man\u0303ana',
                    'expected': 'ana\u0303nam'
                },
                //{
                    //'description': 'Multiple combining marks',
                    //'input': 'foo\u0303\u035C\u035D\u035Ebar',
                    //'expected': 'rabo\u0303\u035C\u035D\u035Eof'
                //},
                {
                    'description': 'Astral symbol (surrogate pair)',
                    'input': 'foo\uD834\uDF06bar',
                    'expected': 'rab\uD834\uDF06oof'
                },
                {
                    'description': 'Unpaired surrogates',
                    'input': 'foo\uD834bar\uDF06baz',
                    'expected': 'zab\uDF06rab\uD834oof'
                },
                //{
                    //'description': 'Astral symbol (surrogate pair) followed by a single combining mark',
                    //'input': 'foo\uD834\uDF06\u0303bar',
                    //'expected': 'rab\uD834\uDF06\u0303oof'
                //},
                //{
                    //'description': 'Astral symbol (surrogate pair) followed by multiple combining marks',
                    //'input': 'foo\uD834\uDF06\u0303\u035C\u035D\u035Ebar',
                    //'expected': 'rab\uD834\uDF06\u0303\u035C\u035D\u035Eoof'
                //},
                //{
                    //'description': 'Zalgo',
                    //'input': 'H\u0339\u0319\u0326\u032E\u0349\u0329\u0317\u0317\u0367\u0307\u030F\u030A\u033EE\u0368\u0346\u0352\u0306\u036E\u0303\u034F\u0337\u032E\u0323\u032B\u0324\u0323 \u0335\u031E\u0339\u033B\u0300\u0309\u0313\u036C\u0351\u0361\u0345C\u036F\u0302\u0350\u034F\u0328\u031B\u0354\u0326\u031F\u0348\u033BO\u031C\u034E\u034D\u0359\u035A\u032C\u031D\u0323\u033D\u036E\u0350\u0357\u0300\u0364\u030D\u0300\u0362M\u0334\u0321\u0332\u032D\u034D\u0347\u033C\u031F\u032F\u0326\u0309\u0312\u0360\u1E1A\u031B\u0319\u031E\u032A\u0317\u0365\u0364\u0369\u033E\u0351\u0314\u0350\u0345\u1E6E\u0334\u0337\u0337\u0317\u033C\u034D\u033F\u033F\u0313\u033D\u0350H\u0319\u0319\u0314\u0304\u035C',
                    //'expected': 'H\u0319\u0319\u0314\u0304\u035C\u1E6E\u0334\u0337\u0337\u0317\u033C\u034D\u033F\u033F\u0313\u033D\u0350\u1E1A\u031B\u0319\u031E\u032A\u0317\u0365\u0364\u0369\u033E\u0351\u0314\u0350\u0345M\u0334\u0321\u0332\u032D\u034D\u0347\u033C\u031F\u032F\u0326\u0309\u0312\u0360O\u031C\u034E\u034D\u0359\u035A\u032C\u031D\u0323\u033D\u036E\u0350\u0357\u0300\u0364\u030D\u0300\u0362C\u036F\u0302\u0350\u034F\u0328\u031B\u0354\u0326\u031F\u0348\u033B \u0335\u031E\u0339\u033B\u0300\u0309\u0313\u036C\u0351\u0361\u0345E\u0368\u0346\u0352\u0306\u036E\u0303\u034F\u0337\u032E\u0323\u032B\u0324\u0323H\u0339\u0319\u0326\u032E\u0349\u0329\u0317\u0317\u0367\u0307\u030F\u030A\u033E'
                //}
            ];
            data.forEach(function(item) {
                expect(array_string.reverse(item.input)).toEqual(item.expected);
            });
        });
    });

    describe("Testing slow permutation", function() {
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

        it("should return false without permutations", function() {
            expect(array_string.slow_permutation("ab", "cd")).toEqual(false);
        });
    });

    describe("Testing fast permutation", function() {
        it("should return true for both empty or null strings", function() {
            expect(array_string.permutation("", "")).toEqual(true);
            expect(array_string.permutation(null, null)).toEqual(true);
            expect(array_string.permutation(undefined, undefined)).toEqual(true);

            expect(array_string.permutation("", null)).toEqual(true);
            expect(array_string.permutation(null, undefined)).toEqual(true);
            expect(array_string.permutation("", undefined)).toEqual(true);
        });

        it("should return false with non-permutations", function() {
             expect(array_string.permutation("abc", "ab")).toEqual(false);
        });

        it("should return true with same strings", function() {
            expect(array_string.slow_permutation("ab", "ab")).toEqual(true);
        });

        it("should return true with permutations", function() {
            expect(array_string.permutation("ab", "ba")).toEqual(true);
            expect(array_string.permutation("aab", "baa")).toEqual(true);
        });

        it("should return false without permutations", function() {
            expect(array_string.permutation("ab", "cd")).toEqual(false);
        });
    });

    describe("Testing if a given object is empty", function() {
        it("should return true for a empty object", function() {
            expect(array_string.is_empty_object(null)).toBeTruthy();
            expect(array_string.is_empty_object("")).toBeTruthy();
            expect(array_string.is_empty_object({})).toBeTruthy();
            expect(array_string.is_empty_object(undefined)).toBeTruthy();
        });

        it("should return false for a non-empty object", function() {
            expect(array_string.is_empty_object({a:"a"})).toBeFalsy();
            expect(array_string.is_empty_object("abc")).toBeFalsy();
        });
    });

    describe("Testing replace space with '%20'", function() {
        it("should return replaced string", function() {
            expect(array_string.replace_space("Mr John Smith")).toEqual("Mr%20John%20Smith");
            expect(array_string.replace_space("Mr")).toEqual("Mr");
            expect(array_string.replace_space("")).toEqual("");
            expect(array_string.replace_space(undefined)).toEqual(undefined);
            expect(array_string.replace_space(null)).toEqual(null);
        });
    });

    describe("Testing basic compression", function() {
        it("should return compressed string", function() {
            expect(array_string.basic_compress("aaabbb")).toEqual("a3b3");
            expect(array_string.basic_compress("aab")).toEqual("aab");
            expect(array_string.basic_compress("aa")).toEqual("aa");
            expect(array_string.basic_compress("a")).toEqual("a");

            expect(array_string.basic_compress("")).toEqual("");
            expect(array_string.basic_compress(undefined)).toEqual(undefined);
            expect(array_string.basic_compress(null)).toEqual(null);
        });
    });
});
