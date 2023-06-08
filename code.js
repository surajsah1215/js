console.log("person1: shows ticket")
console.log("person2: shows ticket")

const premovie = async()=>{
  const promisewifeBringTickets = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('ticket')
    }, 3000);
  });

  const post = new Promise((resolve,reject)=>{
    user = {title:'sra'}
    resolve(user.title);
  })

  const getpropcorn = new Promise((resolve,reject)=> resolve('popcorn')); 
  const getbutter = new Promise((resolve,reject)=>resolve('butter'));
  const getcandy = new Promise((resolve,reject)=>resolve('candy'));
  const getcoke = new Promise((resolve,reject)=>resolve('coke'));

  let tickett = await promisewifeBringTickets;
  console.log("wife: i Have tickets");
  console.log("we should go in");
  console.log("wife: no i am hungry");

  let popcornn  = await getpropcorn;
  console.log("husban: i got ",popcornn);
  console.log('husband:we should go in');
  console.log("wife: i need some butter");

  let butter = await getbutter;
  console.log("husband : i got some ",butter);
  console.log("wife: lets go we are getting late");

  let [popcorn,candy,coke] = await Promise.all([getpropcorn,getcandy,getcoke]);
  console.log(popcorn,candy,coke);
 
  
  await post;
  return post;

}

premovie().then((m)=>console.log(m));


// const createpost = async()=>{
  
//   return add
// }
// createpost().then((m)=>console.log(m));

console.log("person4 shows tickets");