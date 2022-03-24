//You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

//Return the minimum number of boats to carry every given person.

function rescueBoats(people, limit) {
    let sorted = people.sort(function(a,b){return a-b});
    let total = 0;
    let start = 0;
    let end = people.length -1;
    console.log(sorted)
    while (start <= end){
        if (sorted[start] + sorted[end] <= limit) {
            start++;
        };
        end--;
        total += 1;
    };
    return total
};


const p = [3, 23, 56, 67, 23, 22, 18, 75, 1, 45, 66];
const l = 75;

console.log(rescueBoats(p,l))