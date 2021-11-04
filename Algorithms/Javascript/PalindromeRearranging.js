function palindromeRearranging(str) {
    let odd = 0;
    let arr = str.split('');
    let l = "";
    let pos = 0;
    while (arr.length) {
        l = arr.pop();
        pos = arr.indexOf(l);
        if (pos <0) {
            odd++;
        } else {
            arr.splice(pos,1);
        }
    }
    
    return odd <2;
}

console.log(palindromeRearranging("racecars"))