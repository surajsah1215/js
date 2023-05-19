var form = document.getElementById('addForm');
var items = document.getElementById('items');
var filter = document.getElementById('filter');
var input = document.getElementById('item');
var edittb = document.querySelectorAll('li');

filter.addEventListener('keyup', filterItems);
items.addEventListener('click',removeItem);
form.addEventListener('submit',addItem);


const desc = document.createElement('input');
desc.className = 'form-control mr-2';
form.appendChild(desc);

const li = document.getElementsByClassName('list-group-item');

for(let i=0; i<edittb.length; i++){
    const editBtn = document.createElement('button');
    editBtn.className = 'float-right';
    editBtn.classList.add('edit');
    editBtn.innerText = 'Edit';

    li[i].appendChild(editBtn);
    

   
}

function addItem(e){
    e.preventDefault();
    const itemValue = document.getElementById('item').value;
    const itemValue2 = desc.value;

    var li = document.createElement('li');
    var button = document.createElement('button');
    const editBtn = document.createElement('button');

    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(itemValue));
    li.appendChild(document.createTextNode(itemValue2));

    
    li.appendChild(button);
    button.className = 'btn btn-danger btn-sm float-right delete';
    // button.appendChild(document.createTextNode('X'));
    button.innerText = 'X';
   
    li.appendChild(editBtn);
    editBtn.className = 'float-right';
    editBtn.classList.add('edit');
    editBtn.innerText = 'Edit';
    

    items.appendChild(li);

}


function removeItem(e){
    if(e.target.classList.contains('delete')){
       if(confirm('Are you sure')){
            var li = e.target.parentElement;
            items.removeChild(li);
       }
    }

}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var li = items.getElementsByTagName('li');

    Array.from(li).forEach(function(item){
        var itemName = item.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
    });
}