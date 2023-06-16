let str = "abbc";
let arr =[]
for(let i=0; i<str.length; i++){
    for(let j=0; j<arr.length; j++){
    if(arr[j] == str[i]){
        arr.pop();
        
    }
}
    arr[i] = str[i]
}
console.log(arr.toString());
console.log(str)