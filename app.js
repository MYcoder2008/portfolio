//....................
/* ....................
     05|12|2022      
     time: 20:30     
..................... */




//counter

//inc +
let inc = document.getElementById('inc');
let dec = document.getElementById('dec');

let res =document.getElementById('res');

let num = document.getElementById('num');
let number = 0;

inc.addEventListener('click' , function () {
    number += 1;
    num.innerHTML = number;
})
dec.addEventListener('click' , function () {
    number -= 1;
    num.innerHTML = number;
})

res.addEventListener('click' , function () {
    number = 0;
    num.innerHTML = number;
})
//....................
/* ....................
     05|12|2022      
     time: 21:30     
..................... */