

"use strict";

module.exports = {

    compare_bin_to_hex: function(bin, hex) {
        var n1 = this.convert_to_base(bin, 2),
            n2 = this.convert_to_base(hex, 16);

        if (n1 < 0 || n2 < 0) {
            return false;
        } else {
            return n1 === n2;
        }
    },
    convert_to_base: function(num_str, base) {
        if (base < 2 || (base > 10 && base !== 16)) {
            return -1;
        }

        var value = 0,
            i, exp, digit;
        for (i = num_str.length - 1; i >= 0; i--) {
            digit = this.digit_to_value(num_str[i]);
            if (digit < 0 || digit >= base) {
                return -1;
            }

            exp = num_str.length - 1 - i;
            value += digit * Math.pow(base, exp);
        }
        return value;
    },
    digit_to_value: function(c) {
        if (c >= '0' && c <= '9') {
            return c - '0';
        } else if (c >= 'A' && c <= 'F') {
            return 10 + c - 'A';
        } else if (c >= 'a' && c <= 'f') {
            return 10 + c - 'a';
        } else {
             return -1;
        }
    }
};
