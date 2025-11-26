// Given a string containing just the characters
// '(' , ')' , '{' , '}' , '[' , ']'
// determine if the input string is valid.

// A string is valid if:

// Open brackets are closed by the same type of brackets.

// Open brackets are closed in the correct order.

// Every closing bracket has a corresponding open one.

// Input	Output
// "()"	true
// "()[]{}"	true
// "(]"	false
// "([{}])"	true
// "({[)]}"	false

function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // closing bracket case
        // console.log(map[char],char)
        if (map[char]) { 
            let top = stack.pop();   // last opened
            if (top !== map[char]) { 
                return false;        // mismatch
            }
        } else {
            // opening bracket — push it
            stack.push(char);
        }
        console.log(stack,"stack")
    }

    // if stack is empty → valid
    return stack.length === 0;
}

// console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
// console.log(isValid("({[]})"));  // true
// console.log(isValid("((("));     // false
