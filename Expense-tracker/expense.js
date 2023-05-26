const chooseExper = document.getElementById('experiment');
const chooseDesc = document.getElementById('description');
const chooseCatog = document.getElementById('cateogory');

const addExp = document.getElementById('expence');
const section = document.createElement('SECTION');
section.className = 'container';
document.body.appendChild(section);

addExp.addEventListener('click',press);

function press(e){
  
    const obj = {
        exp :chooseExper.value,
        des: chooseDesc.value,
        cat : chooseCatog.value
    };

    let obj_serialized = JSON.stringify(obj);

    localStorage.setItem(chooseExper.value,obj_serialized);

    const ul = document.createElement('ul');
   
    const btn = document.createElement('button');
    btn.className = 'float-right';
    btn.innerText = 'Delete Expense';

    const edit = document.createElement('button');
    edit.className = 'float-right';
    edit.innerText = 'Edit Expense';

    section.appendChild(ul);

    ul.appendChild(document.createTextNode("*"));
    ul.appendChild(document.createTextNode(chooseExper.value));
    ul.appendChild(document.createTextNode(chooseDesc.value));
    ul.appendChild(document.createTextNode(chooseCatog.value));
    
    

    ul.appendChild(btn);
    ul.appendChild(edit);

    btn.addEventListener('click',removebtn);
    edit.addEventListener('click',editable);
    function removebtn(e){
        localStorage.removeItem(ul.childNodes[1].textContent);
        ul.remove();
        
    }
    function editable(e){
        ul.remove();
        localStorage.removeItem(ul.childNodes[1].textContent);
        document.getElementById('experiment').value = ul.childNodes[1].textContent;
        document.getElementById('description').value = ul.childNodes[2].textContent;
        document.getElementById('cateogory').value = ul.childNodes[3].textContent;

       
    }

}



