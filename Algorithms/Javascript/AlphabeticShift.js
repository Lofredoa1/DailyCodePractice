// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

function alphabeticShift(input) {
    let result = ''
    for (i = 0; i < input.length; i++){
        num = input.charCodeAt(i)
        if (num == 122){
            char = "a"
            result = result.concat(char)
        } else {
            num += 1
            let char = String.fromCharCode(num)
            result = result.concat(char)
        }
    }
    return result 
}

const str = "bqzyxqhfgs"

console.log(alphabeticShift(str))