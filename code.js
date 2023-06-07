const post = []
function updateLastActivityTime(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      const time  = new Date();
      resolve(time);
    }, 1000);
  })
}
function createPost(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const user = {title:'post'}
      post.push(user);
      resolve(user)
    },1000)
  })
}

function deleteUser(){
  return new Promise((resolve,reject)=>{
    if(post.length>0){
      post.pop();
      resolve()
    }
  })
}

function printpost(){
  post.forEach((post)=>{
    console.log(post.title);
  })
}

// Promise.all(updateLastActivityTime,createPost);
createPost().then((mess)=>{
  console.log(mess.title);
  updateLastActivityTime().then((mess)=>{
    console.log(mess);
    printpost();
  });
})