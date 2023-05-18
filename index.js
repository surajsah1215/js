// const bord = document.getElementById('main-header');
// bord.style.borderBottom = 'solid 4px black';

// const item = document.getElementsByClassName('title')[0];
// item.style.fontWeight = '900';
// item.style.color = 'green';

// const li = document.getElementsByClassName('list-group-item');
// li[2].style.backgroundColor = 'green';

// const ll = document.getElementsByTagName('li');

// for(let i=0; i<ll.length; i++){
//     ll[i].style.fontWeight = '900';
// }

// var chng = document.querySelectorAll('li');
// chng[1].style.backgroundColor = 'green';
// chng[2].style.opacity = '0';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

const li = document.querySelector('#items');
console.log(li.parentNode);
console.log(li.lastElementChild);
console.log(li.lastChild);
console.log(li.firstChild);
console.log(li.firstElementChild);
console.log(li.nextSibling);
console.log(li.nextElementSibling);
console.log(li.previousElementSibling);
console.log(li.previousSibling);

var newDiv = document.createElement('div');
newDiv.id = 'hello1';
newDiv.setAttribute('title','hellodiv');
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header .h1');


container.insertBefore(newDiv, h1);