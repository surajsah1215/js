const namee = document.getElementById('name');
const email = document.getElementById('email');


const button = document.querySelector('.btn');

button.addEventListener('click',submit);

// let arr = [];
function submit(e){
    e.preventDefault();
    const obj = {
        namee :namee.value,
        email: email.value
    };

    let obj_serialized = JSON.stringify(obj);
    // arr.push(obj_serialized)

    localStorage.setItem(email.value,obj_serialized);
    
   

}
