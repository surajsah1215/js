const namee = document.getElementById('name');
const email = document.getElementById('email');


const button = document.querySelector('.btn');

button.addEventListener('click',submit);

function submit(e){
    e.preventDefault();
    const obj = {
        namee :namee.value,
        email: email.value
    };

    let obj_serialized = JSON.stringify(obj);

    localStorage.setItem(email.value,obj_serialized);

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
