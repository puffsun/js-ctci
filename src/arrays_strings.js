"use strict";

module.exports = (function() {

    /* we suppose all chars are ASCII code */
    var unique_chars = function(chars) {
        if (!chars) {
            return true;
        }

        if (chars.length > 256) {
            return false;
        }

        var container = {},
            c;
        for (c in chars) {
            if (chars.hasOwnProperty(c)) {
                if (container[chars[c]]) {
                    return false;
                } else {
                    container[chars[c]] = true;
                }
            }
        }

        return true;
    };

    var naive_reverse = function(str) {
        if (!str) {
            return str;
        }
        return str.split("").reverse().join("");
    };

    var regexSymbolWithCombiningMarks = /(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g;
    var regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

    var reverse = function(string) {
        if (!string) {
            return string;
        }
        // Step 1: deal with combining marks and astral symbols (surrogate pairs)
        string = string
        // Swap symbols with their combining marks so the combining marks go first
        .replace(regexSymbolWithCombiningMarks, function($0, $1, $2) {
            // Reverse the combining marks so they will end up in the same order
            // later on (after another round of reversing)
            return reverse($2) + $1;
        })
        // Swap high and low surrogates so the low surrogates go first
        .replace(regexSurrogatePair, '$2$1');
        // Step 2: reverse the code units in the string
        var result = '';
        var index = string.length;
        while (index--) {
            result += string.charAt(index);
        }
        return result;
    };

    var slow_permutation = function(str1, str2) {
        if (!str1 && !str2) {
            return true;
        }

        if (str1.length !== str2.length) {
            return false;
        }

        if (str1 === str2) {
            return true;
        } else {
            return sort_str_asc(str1) === sort_str_asc(str2);
        }
    };

    var permutation = function(str1, str2) {
        if (!str1 && !str2) {
            return true;
        }

        if (str1.length !== str2.length) {
            return false;
        }
        var container = {},
            i, length;
        for (i = 0, length = str1.length; i < length; i++) {
            if (container[str1[i]]) {
                container[str1[i]] += 1;
            } else {
                container[str1[i]] = 1;
            }
        }

        for (i = 0, length = str2.length; i < length; i++) {
            if (container[str2[i]]) {
                container[str2[i]] -= 1;
                if (container[str2[i]] === 0) {
                    delete container[str2[i]];
                }
            } else {
                return false;
            }
        }
        return is_empty_object(container);
    };

    var is_empty_object = function(obj) {
        if (!obj || obj.length === 0) {
            return true;
        }

        if (obj.length > 0) {
            return false;
        }

        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    };

    var sort_str_asc = function(str) {
        return str.split("").sort().join("");
    };

    var replace_space = function(str) {
        if (!str) {
            return str;
        }
        return str.replace(/\s/g, "%20");
    };

    var basic_compress = function(str) {
        if (!str) {
            return str;
        }

        if (count_of_compression(str) >= str.length) {
            return str;
        }

        var count = 0,
            prev = str[0],
            result = "",
            i, length;

        for (i = 0, length = str.length; i < length; i++) {
            if (str[i] === prev) {
                count += 1;
            } else {
                result += prev;
                result += count;
                count = 1;
                prev = str[i];
            }
        }
        result += prev;
        result += count;

        return result;
    };

    function count_of_compression(str) {
        if (!str) {
            return 0;
        }

        var prev = str[0],
            result = 0,
            i, length;
        for (i = 0, length = str.length; i < length; i++) {
            if (str[i] !== prev) {
                result += 2;
                prev = str[i];
            }
        }
        return result + 2;
    }

    var rotate = function(matrix, direction) {
        if (!matrix || matrix.length === 0) {
            return matrix;
        }
        var deepCopy = function (obj) {
            return JSON.parse(JSON.stringify(obj));
        };

        var ret = deepCopy(matrix);

        // Does not work with non-square matricies.
        var transpose1 = function (m) {
            for (var i = 0; i < m.length; i++) {
                for (var j = i; j < m[0].length; j++) {
                    var x = m[i][j];
                    m[i][j] = m[j][i];
                    m[j][i] = x;
                }
            }
            return m;
        };

        // Efficiently builds and fills values at the same time.
        var transpose3 = function (m) {
            var result = new Array(m[0].length);
            for (var i = 0; i < m[0].length; i++) {
                result[i] = new Array(m.length - 1);
                for (var j = m.length - 1; j > -1; j--) {
                    result[i][j] = m[j][i];
                }
            }
            return result;
        };

        var transpose = function (m) {
            if (m.length === m[0].length) {
                return transpose1(m);
            } else {
                return transpose3(m);
            }
        };

        var reverseRows = function (m) {
            //for (var i = 0, k = m.length - 1; i < k; ++i, --k) {
            //    var x = m[i];
            //    m[i] = m[k];
            //    m[k] = x;
            //}
            //return m;
            return m.reverse();
        };

        var reverseCols = function (m) {
            for (var i = 0; i < m.length; i++) {
                //for (var j = 0, k = m[i].length - 1; j < k; ++j, --k) {
                //    var x = m[i][j];
                //    m[i][j] = m[i][k];
                //    m[i][k] = x;
                //}
                m[i].reverse();
            }
            return m;
        };

        var rotate90Left = function (m) {
            m = transpose(m);
            m = reverseRows(m);
            return m;
        };

        var rotate90Right = function (m) {
            m = reverseRows(m);
            m = transpose(m);
            return m;
        };

        var rotate180 = function (m) {
            m = reverseCols(m);
            m = reverseRows(m);
            return m;
        };

        if (direction === 90 || direction === -270) {
            return rotate90Left(ret);
        } else if (direction === -90 || direction === 270) {
            return rotate90Right(ret);
        } else if (Math.abs(direction) === 180) {
            return rotate180(ret);
        }

        return matrix;
    };

    return {
        unique_chars         : unique_chars,
        naive_reverse        : naive_reverse,
        reverse              : reverse,
        slow_permutation     : slow_permutation,
        permutation          : permutation,
        is_empty_object      : is_empty_object,
        replace_space        : replace_space,
        basic_compress       : basic_compress,
        rotate               : rotate,
        count_of_compression : count_of_compression
    };
}());
