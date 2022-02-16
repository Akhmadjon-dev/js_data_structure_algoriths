


// Recursive functions 
// are functions that call themselves
// They are used to solve problems that can be broken down into smaller pieces 
// and then solved recursively.


// Divide-and-conquer is a technique for solving problems that can be broken down into smaller pieces
// and then solved recursively.


// Let's look at a few examples of divide-and-conquer.
// Fibonacci numbers are a sequence of numbers that start with 0 and 1, and then follow a pattern of the sum of the previous two numbers.
// The first 10 numbers are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

// let's look at the function with simple loop
function getNthFibo(n){
    let fibo = [0, 1];
    for(let i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo[n];
}


function getNthFibo(n) {
    if(n <= 1) return n;
    let sum = 0;
    let start = 1;
    let next = 0; // as we don't know next number yet
    for(let i = 1; i <= n; i++){
        sum = start + next;
        next = start;
        start = sum;
    }
    return sum;
}


// now let's look at the function with recursion

function getNthFibo(n){
    if(n <= 1){
        return 1;
    }
    // console.log(n, 'n');
    return getNthFibo(n-1) + getNthFibo(n-2);
}

function getNthFibo(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return getNthFibo(n - 1) + getNthFibo(n - 2);
    }
}

function getNthFiboWithTail(n){
    if(n <= 1){
        return 1;
    }
    let [prev, next] = [0, 1];
    for(let i = 2; i <= n; i++){
        [prev, next] = [next, prev + next];
    }
    return next;
}