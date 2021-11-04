// Given two strings, find the number of common characters between them

function commonCharacterCount(s1, s2) {
    let x = s1.split('');
    let count = 0;
    for (i=0; i < x.length ; i++){
        if (s2.includes(x[i])){
            count++
            s2 = s2.replace(x[i],"")
        }
    } return count
}

console.log(commonCharacterCount("brown dog", "catdog"))