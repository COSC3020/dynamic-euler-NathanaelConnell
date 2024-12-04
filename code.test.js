const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

function testFactorial() {
    let factorial = 1;
    for (let i = 1; i <= 10; i++) {
        factorial *= i;
    }
    return factorial;
}

assert(Math.abs(e(0) - 1) < 1e-10); // e(0) = 1
assert(Math.abs(e(1) - 2) < 1e-10); // e(1) = 1 + 1/1!
assert(Math.abs(e(5) - 2.7166666666666663) < 1e-10); // e(5) for 5 terms
assert(Math.abs(e(10) - 2.7182818011463845) < 1e-10); // e(10)

assert(Math.abs(e(15) - Math.E) < 1e-10); // Should converge close to Math.E
assert(Math.abs(e(20) - Math.E) < 1e-15); // High precision for more terms

console.log("All tests passed!");
