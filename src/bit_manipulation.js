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

module.exports = (function() {
    return {
        get_bit              : get_bit,
        set_bit              : set_bit,
        clear_bit            : clear_bit,
        update_bit           : update_bit,
        clear_bits_msb       : clear_bits_msb,
        clear_bits_thru_zero : clear_bits_thru_zero
    };
} ());
