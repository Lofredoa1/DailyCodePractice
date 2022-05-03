//A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

//Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

//A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

//By this logic, we say a sequence of brackets is balanced if the following conditions are met:

//It contains no unmatched brackets.
//The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

//Return a string of YES or NO if the input is balanced

function isBalanced(s) {
    const openers = ['(', '{', '['];
    const closers = {
        ')': '(', 
        '}': '{', 
        ']': '['
    };
    const stack = [];

    for (let i=0; i < s.length; i++) {
        let c = s.charAt(i);
        if (openers.includes(c)) {
            stack.push(c);
        } else if (closers[c]) {
            if (stack.length == 0) {
                return 'NO';
            };

            if (stack.pop() !== closers[c]) {
                return 'NO';
            };
        };
    };
    
    if (stack.length > 0) {
        return 'NO';
    }

    return 'YES';
}

const pass = '[()][{}()][](){}([{}(())([[{}]])][])[]([][])(){}{{}{[](){}}}()[]({})[{}{{}([{}][])}]'
const fail = '[[()][{}[{}[{}]]][]{}[]{}[]{{}({}(){({{}{}[([[]][[]])()]})({}{{}})})}'

console.log(isBalanced(fail))