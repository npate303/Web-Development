const ul = document.querySelector(".people");

const people = ["Nidhi", "Bina", "Riken", "Nitya", "Isha", "Tammna"];

let html = ``;
people.forEach((person) => {
  html += `<li style ="color:dimgray">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;

//-----------------------------------------------

let user = {
  name: "nidhi",
  age: [25, 60, 80, 90],
  logAge: function () {
    this.age.forEach((number) => console.log(number));
  },
};

console.log(user.name.toUpperCase());
user.logAge();

let ages = [1, 2, 3, 5];

function nidhi() {
  for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
  }
}

nidhi();

//lernt that all function in JavaScript returns undefiend
//all function returns something at the end
function r() {}

console.log(r());

//-----------------------------------------

//This section is for DOM manipulation

const paras = document.querySelectorAll("p");

console.log(paras);

paras.forEach((parasItem) => {
  if (parasItem.textContent.includes("success")) {
    //parasItem.setAttribute('style', 'color : green');
    parasItem.classList.add("success");
  } else if (parasItem.textContent.includes("error")) {
    parasItem.setAttribute("style", "color : red");
    //parasItem.classList.add('error')
  }
});

//---------------------------------------------------


