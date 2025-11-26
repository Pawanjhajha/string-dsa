let arr=["eat", "tea", "tan", "ate", "nat", "bat"]
//output=
//  [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]



let map = new Map();

for (let word of arr) {
    // sort the word: "eat" → "aet"
    let sorted = word.split('').sort().join('');

    if (!map.has(sorted)) {
        map.set(sorted, []);
    }

    map.get(sorted).push(word);
}
console.log(map,'map')
console.log(map.values(),"value")
let result = Array.from(map.values());
console.log(result);
