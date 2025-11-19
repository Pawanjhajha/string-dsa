let str="aaabbcdddd"
let map=new Map()
for(let i=0;i<str.length;i++){
    map.set(str[i],(map.get(str[i])||0)+1)
}
console.log(map,"map")
let result=""
for(let[key,value] of map){
    console.log(key,value)
    result=result+key+value
}
console.log(result,"result")


//this is for the consicutive
let count = 1
let result1=''
for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
        count++
    } else {
        result1 += str[i] + count
        count = 1
    }
}