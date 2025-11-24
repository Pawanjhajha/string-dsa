
let str = "cbbd";
//ans bb
let longest = "";

for (let i = 0; i < str.length; i++) {
    let sum = ""; // reset sum for each new starting point
    for (let j = i; j < str.length; j++) {
        sum += str[j];
        if (sum === sum.split('').reverse().join('')) {
            if (sum.length > longest.length) {
                longest = sum;
            }
        }
    }
}
console.log(longest)

