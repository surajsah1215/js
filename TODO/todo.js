const todo_name = document.getElementById('todoname');
const todo_desc = document.getElementById('tododesc');
const submitbutton = document.querySelector('.btn');
const ul_todoremaining = document.getElementById('remaining_item')
const ul_completedtodo = document.getElementById('Completed_item')

const btn = document.createElement('button');
btn.className = 'float-right';
btn.innerText = 'X';

const edit = document.createElement('button');
edit.className = 'float-right';
edit.innerText = 'add';

submitbutton.addEventListener('click',add);



window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/0d267118816e46ddb62e7ea75ef452d1/todo")
.then((respone)=> {
    // console.log(respone.data);

    for(var i=0; i<respone.data.length; i++){
        // console.log(respone.data[i]);
        const li1 = document.createElement('li');
        li1.innerText = respone.data[i].name +" :- " + respone.data[i].desc +" " ;
        li1.append(btn);
        li1.append(edit);
        ul_todoremaining.append(li1);

    }
}).catch(err => console.log(err));


axios.get('https://crudcrud.com/api/0d267118816e46ddb62e7ea75ef452d1/completetodo')
.then((respone)=>{
    for(var i=0; i<respone.data.length; i++){
        const li = document.createElement('li');
        li.innerText = respone.data[i].name + " :- " + respone.data[i].desc
        ul_completedtodo.append(li);
    }
})

})

function add(e){
    e.preventDefault();
    // console.log(todo_name.value);
    // console.log(todo_desc.value);
    obj = {
        name:todo_name.value,
        desc :todo_desc.value
    }
    let id = null;
    let li = null
    axios.post('https://crudcrud.com/api/0d267118816e46ddb62e7ea75ef452d1/todo',obj)
    .then((respone) => {
       li =  document.createElement("li");
       li.innerText = obj.name +" :-" + obj.desc;
       li.append(btn);
       li.append(edit);
       ul_todoremaining.append(li);
        
       id = respone.data._id;
       console.log(id);
    }).catch((err) => {
        console.log(err);
    });


    btn.addEventListener('click',deletetodo);
    edit.addEventListener('click',completetodo);    

    function deletetodo(e){
        console.log(id);
        axios.delete(`https://crudcrud.com/api/0d267118816e46ddb62e7ea75ef452d1/todo/${id}`)
        .then((respone)=>{
            console.log('ok')
            ul_todoremaining.removeChild(li);
        })
       
    }
    let li2 = null
   function completetodo(e){
    axios.post('https://crudcrud.com/api/0d267118816e46ddb62e7ea75ef452d1/completetodo',obj)
    .then(()=>{
        // ul_todoremaining.removeChild(li)
        li2 =  document.createElement("li");
        li2.innerText = obj.name +" :-" + obj.desc;
        ul_todoremaining.removeChild(li);
        ul_completedtodo.append(li2);
         
      
    })
   }
}



