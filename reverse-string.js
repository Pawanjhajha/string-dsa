let a="Hello"


arr=a.split('')
console.log(arr,"arr")
let i=0
let j=arr.length-1
while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
}
result=arr.join("")
console.log(result,"result")