//Given an integer x, return true if x is palindrome integer.

//An integer is a palindrome when it reads the same backward as forward.

// Inputs: -2^31 <= x <= 2^31 - 1

function isPalindrome(x){
    if(x < 0){
        return false
    };
    
    const temp = x;
    let reversed = 0;
    
    while(x>0){
        reversed = (reversed * 10) + (x%10);
        x = parseInt(x/10);
    };
    return reversed == temp;
};

const x = 123454321;

console.log(isPalindrome(x))
