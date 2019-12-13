var frequentElement = function (nums, k) {
    var array = {};
    nums.forEach(function (value) {
        array[value] = (array[value] + 1) || 1;
    });
    var result = [];
    Object.keys(array).sort(function (a, b) { return array[b] - array[a] }).
        slice(0, k).forEach(x => {
            result.push(parseInt(x));
        });
    return result;
};

console.log(frequentElement([1, 1, 1, 2, 2, 3, 3, 1, 2]));