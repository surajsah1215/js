const bord = document.getElementById('main-header');
bord.style.borderBottom = 'solid 4px black';

const item = document.getElementsByClassName('title')[0];
item.style.fontWeight = '900';
item.style.color = 'green';

const li = document.getElementsByClassName('list-group-item');
li[2].style.backgroundColor = 'green';

for(let i=0; i<li.length; i++){
    li[i].style.fontWeight = '900';
}