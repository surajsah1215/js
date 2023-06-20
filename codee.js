// // const mul = (a,b)=>{
// //     return a*b;
// // }

// // console.log(mul(3,4));

// const student={
// name:'max',
// age:23,
//  print(){
//     console.log('my name is ' + this.name + ' and age is '+ this.age )
// }
// }

// // student.print();

// const hobbies = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

// console.log(hobbies.map((element) =>{
//     if(element === ' '){
//         return 'empty string'
//     }
//     // else{
//     //     return element
//     // }
//     return element
// }));

// console.log({...student})

// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



// console.log(obj1)

// console.log(obj2)

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1



// // obj1.key1 = 20;

// // key3 = 123


// console.log(key1, key3)

function delayprint(value){
    return new Promise((resolve,reject)=>{
      
            console.log(value);
            resolve();
        
    })
}

async function print(){
   await delayprint('a');
   await delayprint('b');
   await delayprint('c');
   await delayprint('d');
   await delayprint('e');
}
print()
