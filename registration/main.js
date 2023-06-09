const namee = document.getElementById('name');
const email = document.getElementById('email');


const button = document.querySelector('.btn');

button.addEventListener('click',submit);

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/c1535eedf7c34f87bebd7aafc4e9575d/adddata")
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

    axios.post("https://crudcrud.com/api/c1535eedf7c34f87bebd7aafc4e9575d/adddata",obj)
    .then(respone => {
        console.log(respone.data)        
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
        ul.remove();
        localStorage.removeItem(obj.email);
    }

    function editclick(e){
        ul.remove();
        localStorage.removeItem(obj.email);
        document.getElementById('name').value = ul.childNodes[0].textContent
        document.getElementById('email').value = ul.childNodes[2].textContent
    }

    
   

}

