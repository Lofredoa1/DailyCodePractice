// write a function that reverses characters in parentheses


const reverseInParentheses = (inputString) => {

    let s = inputString;

    while (s.indexOf(")",0)!=-1) {
        var c = s.indexOf(")", 0);
        var a = s.lastIndexOf("(", c);
        var b = s.slice(a + 1, c).split("").reverse().join("");
        s = s.slice(0, a) + b + s.slice(c + 1);
    }
    return s;
}

console.log(reverseInParentheses("foo(bar(baz))blim"))