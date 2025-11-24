let s = "anagramr"
let t = "nagaram"

//output true a crater shoud exits in the the anohter strig
let anagram=true
if (s.length !== t.length) anagram= false;


let map=new Map()
for(let i=0;i<s.length;i++){
    map.set(s[i],(map.get(s[i])||0)+1)
}

for(let i=0;i<t.length;i++){
    if(map.get(t[i])&&map.get(t[i])>0){
        map.set(t[i],(map.get(t[i]))-1)
    }else{
        console.log("not anagram")
        anagram=false
    }
}
if(anagram){
    console.log("anagram")
}else{
    console.log("not anagram")
}