//Write an algorithm to determine if a number n is happy.

//A happy number is a number defined by the following process:

    //Starting with any positive integer, replace the number by the sum of the squares of its digits.
    //Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    //Those numbers for which this process ends in 1 are happy.

//Return true if n is a happy number, and false if not.

function isHappy(n) {
    const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}
    if (n < 1) return false;
    
    let set = new Set();
	
    while (!set.has(n)) {
        set.add(n);
        let s = n.toString();
        n = 0;
        for (let i = 0; i < s.length; ++i) {
            n += squares[s[i]];
        }
        if (n == 1) return true;
    }
	
    return false;
};

const n = 23;

console.log(isHappy(n))