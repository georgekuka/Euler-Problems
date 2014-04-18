var isPrime = function (input) {
    for (var i = 2; i < input; i++) {
        if ( input % i === 0 ) {
            return false;
        } 
       } 
        return true;
};

var primes = function (num) {
    var factors = [];
    for (var i = 2; i < num; i++) {
        if (num % i === 0 && isPrime(i)) {
            factors.push(i);
        } else {
            continue;
        }
    }
    console.log(factors);
};

var start = new Date().getTime();
primes(600851);
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');