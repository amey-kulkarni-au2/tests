var power = function (x, n) {
    if (n === 0) return 1;
    var value = (Math.exp(Math.abs(n) * Math.log(Math.abs(x))));
    if (x < 0 && n % 2 == 1)
        value *= -1;
    return n > 0 ? value : (1 / value);
};

console.log(power(100, 10));