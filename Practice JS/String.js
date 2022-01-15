let myName = "Nidhi Patel";
let findDiff = "Let us see what is the difference between slice and substring";
let age = [null,1];

function printName(){
    for ( var i=1 ; i < 5; i++){
        console.log(myName);
    }
}

printName(); 

console.log('yo');
console.log(myName[4]);
console.log(myName.length);
console.log(myName.toLocaleUpperCase());
console.log(myName.toLocaleLowerCase());
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.indexOf('d'));

let someSlice = findDiff.slice(4,10);
let someSub = findDiff.substring(5,10);
console.log(findDiff);
console.log(someSlice);
console.log(someSub);