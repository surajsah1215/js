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

    section.appendChild(ul);

    ul.appendChild(document.createTextNode(obj.namee));
    ul.appendChild(document.createTextNode(" - "));
    ul.appendChild(document.createTextNode(obj.email));

    ul.appendChild(btn);

    btn.addEventListener('click',clear);

    function clear(e){
        ul.remove();
        localStorage.removeItem(email.value);
    }

    
   

}
