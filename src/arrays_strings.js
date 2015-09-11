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

    var reverse = function(str) {
        if (!str) {
            return str;
        }
        // TODO reverse a string manually
        return str.split("").reverse().join("");
    };

    return {
        unique_chars: unique_chars,
        reverse: reverse
    };
}());
