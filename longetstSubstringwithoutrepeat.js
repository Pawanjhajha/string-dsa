let str = 'abcabcbb';

let l = 0;
let r = 0;
let longest = new Set();
let maxLen = 0;

// while (r < str.length) {
//     if (!longest.has(str[r])) {
//         longest.add(str[r]);
//         r++;
//         maxLen = Math.max(maxLen, longest.size);
//     } else {
//         longest.delete(str[l]);
//         l++;
//     }
// }

// console.log(maxLen); // 3

//return subsctring too

let best = "";

while (r < str.length) {
    if (!longest.has(str[r])) {
        longest.add(str[r]);
        r++;

        if (longest.size > maxLen) {
            maxLen = longest.size;
            best = str.substring(l, r);
        }

    } else {
        longest.delete(str[l]);
        l++;
    }
}

console.log(best); // "abc"
