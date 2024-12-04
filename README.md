# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$
e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots
$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?
Ai helped with the testing.

The worst case time complexity of the updated algorithm is big theta (n). The algorithm uses a single loop that iterates from i = 1 to n where n is the number of terms in the approximation of e. Each iteration updates the factorial value using a constant time operation and the reciprocal of the factorial is added to the cumulative sum. Since all operations inside the loop have a constant time cost the total runtime grows linearly with the number of terms.
