const LongestSubString = (s) => {
  
    let arr = s.split('');
    let testStr = arr[0];
    let longStr = arr[0];
    let count = 0;
   
    for(i=1; i < arr.length; i++){
        let x = arr[i]
        if (testStr.length >= 1 && testStr.includes(x)){
            if (testStr.length > longStr.length){
                longStr = testStr
                count = longStr.length
                testStr = ""
            } else {
                testStr = ""
            }
        } else {
            testStr = testStr.concat(x)
            longStr = testStr
            count = longStr.length
        }
    }
    return count, longStr        
}

console.log(LongestSubString("Teshevdfpot"))