// Given an array on integers representing coordinates on a number line
// Assume that you are jumping from the point with coordinate 0 to the right
// You are allowed only to make jumps of the same length represented by some integer
// Find the minimal length of the jump enough to avoid all the obstacles

function avoidObstacles(arr) {
    let solved = false;
    let n = 0;
    while(solved === false){
        n += 1;
        if(arr.every(x=>x%n)){
            solved = true
        }
    }
    return n    
}

const arr = [3,6,8,23,45]
avoidObstacles(arr)

console.log(avoidObstacles(arr))