//Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

function firstNotRepeating(s) {
    let arr = s.split('')
    for (i= 0; i < arr.length; i++){
        let char = arr[i];
       if (arr.indexOf(char) == i && arr.indexOf(char, i+1) == -1 ){
           return arr[i]
       }
    }
    return "_"
}

const str = "abgfkgfgbnfgksadnfiudfgs";

console.log(firstNotRepeating(str))