let strs = ["flower", "flow", "flight"];

if (strs.length === 0) console.log("");

let prefix = strs[0];
for (let i = 1; i < strs.length; i++) {
    console.log(i,"i")
    while (strs[i].indexOf(prefix) !== 0) {
        console.log(strs[i].indexOf(prefix),prefix.slice(0, -1))
        prefix = prefix.slice(0, -1);
        if (prefix === "") {
            console.log("");
        }
    }
}

console.log(prefix);   // "fl"