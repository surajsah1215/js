const namee = document.getElementById('name');
const email = document.getElementById('email');


const button = document.querySelector('.btn');

button.addEventListener('click',submit);

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/6e4bba46629e4ff99fd5b227c26f2856/adddata")
.then((respone)=> {
    console.log(respone.data);
    for(var i=0; i<respone.data.length; i++){
        showUserOnScreen(respone.data[i]);
    }
}).catch(err => console.log(err));

})

function showUserOnScreen(user){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

function submit(e){
    e.preventDefault();
    const obj = {
        namee :namee.value,
        email: email.value
    };

    let obj_serialized = JSON.stringify(obj);
    let id = null;
    axios.post("https://crudcrud.com/api/6e4bba46629e4ff99fd5b227c26f2856/adddata",obj)
    .then(respone => {
        id = respone.data._id
    }).catch((err) => {
        document.body.innerHTML= document.body.innerHTML + "<h4>ERROR</h4>"
        console.log(err);
    });

    
    // localStorage.setItem(email.value,obj_serialized);

    const section = document.querySelector('.container');
    const ul = document.createElement('ul');
   
    const btn = document.createElement('button');
    btn.className = 'float-right';
    btn.innerText = 'Delete';

    const edit = document.createElement('button');
    edit.className = 'float-right';
    edit.innerText = 'Edit';

    section.appendChild(ul);

    ul.appendChild(document.createTextNode(obj.namee));
    ul.appendChild(document.createTextNode(" - "));
    ul.appendChild(document.createTextNode(obj.email));

    ul.appendChild(btn);
    ul.appendChild(edit);

    btn.addEventListener('click',clear);
    edit.addEventListener('click',editclick);

    function clear(e){
        // ul.remove();
        // localStorage.removeItem(obj.email);
        axios.delete(`https://crudcrud.com/api/6e4bba46629e4ff99fd5b227c26f2856/adddata/${id}`)
        .then(()=> {
            ul.remove();
        })
        .catch(err => console.log(err));
    }

    function editclick(e){

        axios.put(`https://crudcrud.com/api/6e4bba46629e4ff99fd5b227c26f2856/adddata/${id}`,obj)
        .then((respone)=>{
            ul.remove();
            document.getElementById('name').value = obj.namee
            document.getElementById('email').value = obj.email
        }).catch(err=> console.log(err));

       
        // localStorage.removeItem(obj.email);
        
    }

    
   

}

