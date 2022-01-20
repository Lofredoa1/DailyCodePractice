//Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

//Given an integer, find its digit degree.

function digitDegree(n) {
    let count = 0;
    while (n.toString().length > 1){
        n = n.toString().split("").reduce((x,y)=>Number(x)+Number(y))     
        count++;
   }
   return count 
}

const input = 877;
// 8 + 7 + 7 = 22
// 2 + 2 = 4

console.log(digitDegree(input))