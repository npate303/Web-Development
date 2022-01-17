//-- Event Listner --

const listItem =  document.querySelectorAll('li');

listItem.forEach( item => {
    item.addEventListener( 'click', (e) => {
        e.target.style.textDecoration = 'line-through';
    })
})
