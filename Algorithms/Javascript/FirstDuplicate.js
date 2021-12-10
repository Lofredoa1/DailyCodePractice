// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

function firstDuplicate(a){
    // loop through the array knowing that its length is the max number possible for each element
    for (i = 0; i < a.length; i++){
        // if the indexed number is negative then its the first duplicate
        if(a[Math.abs(a[i])-1] < 0)
            return Math.abs(a[i]);
        // if the indexed number isn't negative, make it negative
        else {
            a[Math.abs(a[i])-1] = -a[Math.abs(a[i])-1]
        }
    }
    return -1
}

const input = [2,8,3,8,9,2,5,3,1]

console.log(firstDuplicate(input))