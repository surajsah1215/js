const namee = document.getElementById('name');
const email = document.getElementById('email');


const button = document.querySelector('.btn');

button.addEventListener('click',submit);

function submit(e){
    e.preventDefault();
    console.log(namee.value);
    localStorage.setItem('name',namee.value);
    localStorage.setItem('email',email.value);
}
