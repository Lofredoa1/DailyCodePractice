//Given a string find all permutations of that string without including any duplicates.

//Example: input = 'abc'
    //Output = 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'

// let stringPermutation = (str) => {
//     if (str.length <= 2) {
//         return str.length === 2 ? [str, str[1] + str[0]] : [str]
//     };
//     return str
//         .split('')
//         .reduce(
//             (acc, letter, i) =>
//                 acc.concat(stringPermutation(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
//             []
//         );
// }

let stringPermutation = (str) => {
        if (str.length <= 2) {
            return str.length === 2 ? [str, str[1] + str[0]] : [str]
        };
        
        let result = [];
    
        for (let i = 0; i < str.length; i++) {
            let char = str[i]
            let remainingChars = str.slice(0,i) + str.slice(i+1, str.length)
            for (let permutation of stringPermutation(remainingChars)) {
                result.push(char + permutation)
            }
        }
        return result
}


console.log(stringPermutation('abcd'))