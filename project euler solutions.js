// Sum multiples of 3 and 5 below 1000 

var j = [];
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        j.push(i);
    }
}
j.reduce(function(a,b) {return a + b;});

// Sum even Fibonacci numbers below 4.000.000 

var x = 0;
var y = 1;
var sum = x + y;
var total = 0;

while (sum < 4000000) {
    if (sum % 2 === 0) {
        total += sum;
    }
    x = y;
    y = sum;
    sum = x + y;
};


console.log(total);

  // Largest Prime Factor

var l = 600851475143;
var factors = [];

for (m = 2; m <= l; m++) {
    while ( l % m === 0) {
        factors.push(m);
        l /= m;
    }
}

console.log(factors[factors.length - 1]);