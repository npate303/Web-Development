const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

//------------- concept of deep copying and shallow copying 
a = { name : 'nidhi', age: 25};
console.log(`i am coming from a ${a}`);
b = a;
console.log(`i am coming from b ${b}`);
//--------------- concept of deep copying and shallow copying

button.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', ()=>{
    popup.style.display = 'none';
});

popup.addEventListener ('click' , () => {
    popup.style.display = 'none';
});

// popup.addEventListener('click', (e) => {
//     if(e.target.className === 'popup-wrapper'){
//       popup.style.display = 'none';
//     }
// });