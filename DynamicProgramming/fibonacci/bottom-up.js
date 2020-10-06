function fibonacci(n) {
    let a = 0, b = 1, sum = 0;

    if (n === 1 || n === 2) {
        return 1;
    }

    for (let i = 1; i < n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }

    return sum;
}

const n = 10;
const result = fibonacci(n);
console.log('Result ', result);