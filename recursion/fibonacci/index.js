/**
 * Write a recursive function called fib which accepts a number and 
 * returns the nth number in the Fibonacci sequence
 * 
 */

 function fib(number) {
    if (number <= 2) return 1
    return fib(number - 1) + fib(number - 2)
 }

 console.log(fib(4));
 console.log(fib(10));
 console.log(fib(28));
 console.log(fib(35));