let str="a man a plan a canal panama".replace(/\s/g,"")
a=str.split("")
console.log(a)
let i=0
let j=a.length-1
while(i<j){
    tem=a[i]
    a[i]=a[j]
    a[j]=tem
    i++
    j--
}
result=a.join("")
console.log(result,"result")

if(result === str){
    console.log("palindrom")
}else{
    console.log("not palindrom")
}
