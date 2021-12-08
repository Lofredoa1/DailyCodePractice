// Given an integer, check if all digits of the given integer are even.

function evenDigitsOnly(n) {
    let strArray = n.toString().split(""); // Splits integer into ''
  	let newArray =  strArray.map(x => parseInt(x)); // converts strings to ints
    for (i = 0; i < newArray.length; i++){
        if (newArray[i] % 2 != 0){
            return false
        }
    }
    return true
}

const evenNumber = 260242842;
const oddNumber = 7169309021;

console.log(evenDigitsOnly(evenNumber))