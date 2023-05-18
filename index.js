const bord = document.getElementById('main-header');
bord.style.borderBottom = 'solid 4px black';

const item = document.getElementsByClassName('title')[0];
item.style.fontWeight = '900';
item.style.color = 'green';

const li = document.getElementsByClassName('list-group-item');
li[2].style.backgroundColor = 'green';

const ll = document.getElementsByTagName('li');

for(let i=0; i<ll.length; i++){
    ll[i].style.fontWeight = '900';
}

var chng = document.querySelectorAll('li');
chng[1].style.backgroundColor = 'green';
chng[2].style.opacity = '0';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}