// There is a broken calculator that has the integer startValue on its display initially. In one operation, you can:
    //multiply the number on display by 2, or
    //subtract 1 from the number on display.
//Given two integers startValue and target, return the minimum number of operations needed to display target on the calculator.

//Example
//Input: startValue = 5, target = 8
//Output: 2
//Explanation: Use decrement and then double {5 -> 4 -> 8}


const brokenCalc = (startValue, target) => {
    let ans = 0;
    while (target > startValue) {
        ans += 1;
        if (target % 2 === 0) {
            target /= 2
        } else {
            target += 1;
        };
        console.log(target)
    };
    return ans + startValue - target
};

console.log(brokenCalc(4,25))

//4 -> 8 -> 7 -> 14 -> 13 -> 26 -> 25 