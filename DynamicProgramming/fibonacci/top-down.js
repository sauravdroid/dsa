function fibonacci(n, cache) {
    if (cache[n]) {
        return cache[n];
    }

    if (n === 1 || n === 2) {
        cache[n] = 1;
        return cache[n];
    } 

    cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);

    return cache[n];
}

const cache = {};
const n = 10;
const result = fibonacci(n, cache);

console.log('Result ', result);