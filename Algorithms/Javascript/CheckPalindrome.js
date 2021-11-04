// Given the string, check if it is a palindrome

const checkPalindrome = (str) => {
    let normal = str;
    let reverse = normal.split('').reverse().join('');
    return normal === reverse
}

console.log(checkPalindrome("racecar"))