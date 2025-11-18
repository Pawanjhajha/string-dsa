let a="hello world"
a = a.replace(/\s/g, "");
let map=new Map()
for(let i=0;i<a.length;i++){
    map.set(a[i],(map.get(a[i])||0)+1)
}
console.log(map,map.size)
let vowel=['a','e','i','o','u']
let counter=0
for(let i=0;i<vowel.length;i++){
    if(map.has(vowel[i])){
        counter=counter+map.get(vowel[i])
    }
}
console.log(counter)

let str="hello world".replace(/\s/g,"")
let vo='aeiou'
counter=0
for(let i=0;i<str.length;i++){
    if(vo.includes(str[i]))counter++
}

for(let c of str){
    console.log(c)
    if(vo.includes(c))counter++
}
console.log(counter,"second")