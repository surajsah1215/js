const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

    myForm.addEventListener('submit', onSubmit);

    function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
    console.log(nameInput.value);
    console.log(emailInput.value); 
    }
}

const btn = document.querySelector('.btn');

btn.addEventListener('click',(e)=>{
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
})

btn.addEventListener('mouseover',(e)=>{
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
})

btn.addEventListener('mouseout',(e)=>{
    document.querySelector('#my-form').style.background = 'black';
    document.querySelector('body').classList.add('bg-dark');
})

