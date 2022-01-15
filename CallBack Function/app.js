const ul = document.querySelector('.people');

const people = ['Nidhi' , 'Bina' , 'Riken', 'Nitya' , 'Isha', 'Tammna'];

let html = ``;
people.forEach( (person) => 
{ 
    html += `<li style ="color:dimgray">${person}</li>` ;
})

console.log(html);

ul.innerHTML =html;