//-- Event Listner --
const ul = document.querySelector('ul');
const listItem =  document.querySelectorAll('li');
const button = document.querySelector('button');


button.addEventListener( 'click' , ( ) => {
   // ul.innerHTML += '<li>New list Item</li>';
    //another way using create element
    const li = document.createElement('li');
    li.textContent = "something new";
    ul.append(li);
});

// listItem.forEach( item => {
//     item.addEventListener( 'click', (e) => {
//        // e.target.style.textDecoration = 'line-through';
//        //another way of removing an item is 
//        e.target.remove();
//     });
// });

//------------

//---- Event Deligation ----

ul.addEventListener('click', ( e ) => {
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
})