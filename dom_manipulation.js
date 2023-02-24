//console.dir(document);
//console.log(document.title);
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 30px #000';
var add_item = document.getElementById('main');
add_item.children[0].innerHTML = '<h1 style="font-color:green">ADD ITEMS</h1>'

var item_list = document.getElementsByClassName('list-group-item');
console.log(item_list);

for (var i =0; i<item_list.length;i++){
    item_list[i].style.fontWeight = 'bold';
}

item_list[2].style.backgroundColor = 'green';