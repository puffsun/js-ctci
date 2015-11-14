"use strict";

function get_bit(num, index) {
    return ((num & (1 << index)) === 0) ? 0 : 1;
}

function set_bit(num, index) {
    return (num | 1 << index);
}

function clear_bit(num, index) {
    var mask = ~(1 << index);
    return num & mask;
}

function update_bit(num, index, value) {
    var mask = ~(1 << index);
    return ((num & mask) | (value << index));
}

function clear_bits_msb(num, index) {
    var mask = (1 << index) - 1;
    return num & mask;
}

function clear_bits_thru_zero(num, index) {
    var mask = ~((1 << (index + 1)) - 1);
    return num & mask;
}

function add_binary(bin_str1, bin_str2) {
    if (!bin_str1) {
        return bin_str2;
    }

    if (!bin_str2) {
        return bin_str1;
    }

    var l1 = bin_str1.length,
        l2 = bin_str2.length,
        max_length  = Math.max(l1, l2),
        carry = 0, sum = [],
        i, m, n, added;

    for (i = 0; i < max_length; i++) {
        m = get_bit(bin_str1, l1 - i - 1);
        n = get_bit(bin_str2, l2 - i - 1);
        added = m + n + carry;
        sum.push(added % 2);
        carry = added / 2;
    }
    if (carry === 1) {
        sum.push("1");
    }
    return sum.reverse().join("");
}

module.exports = (function() {
    return {
        get_bit              : get_bit,
        set_bit              : set_bit,
        clear_bit            : clear_bit,
        update_bit           : update_bit,
        clear_bits_msb       : clear_bits_msb,
        clear_bits_thru_zero : clear_bits_thru_zero,
        add_binary           : add_binary
    };
} ());
