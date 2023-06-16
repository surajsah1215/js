const todo_name = document.getElementById('todoname');
const todo_desc = document.getElementById('tododesc');
const submitbutton = document.querySelector('.btn');
const ul_todoremaining = document.getElementById('remaining_item')
const ul_completedtodo = document.getElementById('Completed_item')

// const btn = document.createElement('button');
// btn.className = 'float-right';
// btn.innerText = 'X';

// const edit = document.createElement('button');
// edit.className = 'float-right';
// edit.innerText = 'add';

submitbutton.addEventListener('click',add);



window.addEventListener("DOMContentLoaded",async ()=>{
    try{
    const respone = await axios.get("https://crudcrud.com/api/06307f7791154d60abe1475ac3c8f17b/todo");

    // console.log(respone);

    for(var i=0; i<respone.data.length; i++){
        // console.log(respone.data[i]);
        const li1 = document.createElement('li');
        li1.innerText = respone.data[i].name +" :- " + respone.data[i].desc +" " ;


        const btn = document.createElement('button');
        btn.className = 'float-right';
        btn.innerText = 'X';

        const edit = document.createElement('button');
        edit.className = 'float-right';
        edit.innerText = 'add';    

        li1.append(btn);
        li1.append(edit);
        ul_todoremaining.append(li1);

        btn.addEventListener('click',delX);
        edit.addEventListener('click',addcompl);

       
       
        async function addcompl(){
            try{
            let id = null
            obj ={
               name: li1.firstChild.textContent.split(" ")[0],
               desc :  li1.firstChild.textContent.split(" ")[2]
            }
            for(let i=0; i<respone.data.length; i++){
                if(respone.data[i].name == li1.firstChild.textContent.split(" ")[0]){
                   id = respone.data[i]._id
                }

            }
           
           
            await axios.post('https://crudcrud.com/api/06307f7791154d60abe1475ac3c8f17b/completetodo',obj)
           
               
               const li2 =  document.createElement("li");
                li2.innerText =li1.firstChild.textContent      
                ul_completedtodo.append(li2);

           
            // console.log(id);
            await axios.delete(`https://crudcrud.com/api/06307f7791154d60abe1475ac3c8f17b/todo/${id}`)
           
                ul_todoremaining.removeChild(li1);
           
        }catch(err){
            console.log(err);
        }
           
        }

       async function delX(e){
        try{
            let id = null
           
            for(let i=0; i<respone.data.length; i++){
                if(respone.data[i].name == li1.firstChild.textContent.split(" ")[0]){
                   id = respone.data[i]._id
                }

            }
           
            await axios.delete(`https://crudcrud.com/api/06307f7791154d60abe1475ac3c8f17b/todo/${id}`) 
           
                ul_todoremaining.removeChild(li1);
           
        }catch(err){
            console.log(err);
        }
       }         

        // console.log(id);
        

    }



const responee = await axios.get('https://crudcrud.com/api/06307f7791154d60abe1475ac3c8f17b/completetodo')

    for(var i=0; i<responee.data.length; i++){
        const li = document.createElement('li');
        li.innerText = responee.data[i].name + " :- " + responee.data[i].desc
        ul_completedtodo.append(li);
    }

}catch(err){
    console.log(err)
}    

})






async function add(e){
    try{
        // e.preventDefault();
        // console.log(todo_name.value);
        // console.log(todo_desc.value);
        obj = {
            name:todo_name.value,
            desc :todo_desc.value
        }
        let id = null;
        let li = null
        // let btn = null
        // let edit = null
        const  respone = await axios.post('https://crudcrud.com/api/06307f7791154d60abe1475ac3c8f17b/todo',obj);
        
        li =  document.createElement("li");
        li.innerText = obj.name +" :-" + obj.desc;
        
            btn = document.createElement('button');
            btn.className = 'float-right';
            btn.innerText = 'X';

            edit = document.createElement('button');
            edit.className = 'float-right';
            edit.innerText = 'add';

        li.append(btn);
        li.append(edit);
        ul_todoremaining.append(li);
            
        id = respone.data._id;
    


        btn.addEventListener('click',deletetodo);
        edit.addEventListener('click',completetodo);    

    async function deletetodo(e){
            try{
            await  axios.delete(`https://crudcrud.com/api/06307f7791154d60abe1475ac3c8f17b/todo/${id}`);
            
                    ul_todoremaining.removeChild(li);
            
            }catch(error){
                console.log(error)
            }
            
        }
        // let li2 = null
        // console.log(li);

    async function completetodo(e){
        try{ 
            await axios.post('https://crudcrud.com/api/06307f7791154d60abe1475ac3c8f17b/completetodo',obj);
        
                
            let li2 =  document.createElement("li");
                li2.innerText = obj.name +" :-" + obj.desc;
                ul_completedtodo.append(li2);

            await axios.delete(`https://crudcrud.com/api/06307f7791154d60abe1475ac3c8f17b/todo/${id}`);
            
                    ul_todoremaining.removeChild(li);
                    
        
        }catch(err){
            console.log(err)
        }

       
    }

}catch(err){
    console.log(err);
}
}





