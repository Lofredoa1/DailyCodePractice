// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

function sqrtSolution (x) {
    let left = 1;
    let right = Math.floor(x / 2) + 1;
    let mid;
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
  
      if (mid * mid > x) {
        right = mid - 1;
      } else if (mid * mid < x) {
        left = mid + 1;
      } else {
        return mid;
      }
    }
    return right;
};

console.log(sqrtSolution(100))