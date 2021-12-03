// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem

function solution(inputArray, elemToReplace, substitutionElem) {
    let newArr = [...inputArray]
    for(i = 0; i < inputArray.length; i++){
        if(newArr[i] === elemToReplace){
            newArr[i] = substitutionElem
        }
    }
    return newArr
}

const inputArray = [1,4,7,2,8,4,8,7,3];
const elemToReplace = 8;
const substitutionElem = 0;

console.log(solution(inputArray, elemToReplace, substitutionElem))