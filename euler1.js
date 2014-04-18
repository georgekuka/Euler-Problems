var multiples = function (cap) {
    var sum = 0;
    for (i = 1; i < cap; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    console.log(sum);
};

multiples(1000);
