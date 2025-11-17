let a="aabbcdd"
let elm=null
// for(let i=0;i<a.length;i++){
//     counter=0
//     for(let j=0;j<a.length;j++){
//         if(a[i]==a[j]){
//             counter++
//         }
//     }
//     if(counter==1){
//         console.log(a[i])
//     }
// }

let map=new Map()
for(let i=0;i<a.length;i++){
    map.set(a[i],(map.get(a[i])||0)+1)
}
console.log(map,"map")
for(let [key,value] of map){
    if(map.get(key)==1){
        console.log(key)
    }
}

function firstNonRepeatingChar(str) {
    for (let char of str) {
      if (str.indexOf(char) === str.lastIndexOf(char)) {
        return char;
      }
    }
    return "None";
  }
  
  console.log(firstNonRepeatingChar("aabbcddee")); // c