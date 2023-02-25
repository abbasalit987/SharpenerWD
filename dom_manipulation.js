//console.dir(document);
//console.log(document.title);
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 30px #000';
// var add_item = document.getElementById('main');
// add_item.children[0].innerHTML = '<h1 style="font-color:green">ADD ITEMS</h1>'

// var item_list = document.getElementsByClassName('list-group-item');
// //console.log(item_list);

// for (var i =0; i<item_list.length;i++){
//     item_list[i].style.fontWeight = 'bold';
// }

// item_list[2].style.backgroundColor = 'green';

// item_without_class = document.getElementsByTagName('li');
// //console.log(item_without_class);
// item_without_class[4].style.backgroundColor= 'grey';

// var item_select = document.querySelectorAll('.list-group-item');
// //console.log(item_select);
// item_select[1].style.backgroundColor = 'green'
// item_select[1].style.color = 'green';
// item_select[2].style.display = 'none'

// var odd_elements = document.querySelectorAll('li:nth-child(odd)');
// console.log(odd_elements);
// for (var i=0; i < odd_elements.length; i++){
//     odd_elements[i].style.backgroundColor = 'green';
// }

//TRAVERSING THE DOM

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'; 

// console.log(itemList.childNodes)
// console.log(itemList.children)
// itemList.firstElementChild.style.backgroundColor = '#f4c4ff'
// itemList.lastElementChild.style.backgroundColor = '#a4c4ff'
// console.log(itemList.lastChild);
// console.log(itemList.nextElementSibling)
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.textContent = 'ITEMS'

// //Cerating a div

// var newDiv = document.createElement('div');
// newDiv.className = 'new-div'
// newDiv.id = 'newdiv'
// newDiv.setAttribute('title','New Div');
// var newDivText = document.createTextNode('Hello World!');
// newDiv.appendChild(newDivText)
// console.log(newDiv)

// var layer1 = document.querySelector('header .container')
// var layer2 = document.querySelector('header h1')

// layer1.insertBefore(newDiv,layer2)

