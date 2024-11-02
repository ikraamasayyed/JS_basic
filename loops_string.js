/*for (let i = 1 ;i<=5;i++){
    console.log(" baar print hoga yeh ")
}
    */
let sum = 0;
for ( let i=1;i<=5;i++){// i is define in this block scope 
    sum = sum + i;
}
//console.log(sum)


  // While Loop
/*
while( condition){
execution
(increment/decreament)}

*/
let w= 1
while ( w<= 10){ 
  //console.log("will print 10 times");
  w++;
}

// do-while loop >> condition is check atleast once and at end
let d = 2;
do { 
    //console.log(" Ikrama")
    d++;
} while(d<=5);


//FOR-OF loop
//helps to loop string and arrays....

let str = "TONY STARK"

for (let i of str){
  //console.log("i= ",i);
}

//FOR IN LOOP 
//loops in object 
// get values >>> object_name[key]=value
/*for ( key in object_name) {
  console.log(key,student[key]);
}*/
let shikshak ={
  naam : "Ikraama",
  age: 21,
  cgpa:8.5,
  isPass:true,
};
for (let key in shikshak){
  //console.log("key>> ",key,"value>> ",shikshak[key]);
}





let num = 1;
while (num<=100){
  ///if (num%2==0){console.log( num)}
  num++;
}


// Create a  game where you start with any random  
/*HiddenNumber= 4;
askKing = prompt("Guess the Number ");
while(HiddenNumber!=askKing){
  askKing=prompt("You Guess the Wrong Number , Try Again ")
}
//document.getElementById("pagal").innerHTML
//console.log("Hehe pagal sahi guess ker k bhi kya ker liye");
*/

//-----------------------STRING-----------------------------------------------
// STRINGS are immutable in JS
let stg ="afifa_pagal";
//Template literals `use of backticks`

//  `string text $(expression) string text`

let thing ={

  item:"book",
  price:90,
};

/*
console.log("the price of the ",thing.item,"is",thing.price, "NORMAL STRING");

let result= `the price of the ${thing.item} is ${thing.price} LITERALS`;
console.log(result)
*/


//Escape Characters

//\n >next line, \t > Tab space  
let line= "this is the line\n";
console.log(line);


//Built-in Methodes in the String....*will ! chng the original value only return the new value*
console.log(`toUpperCase: `,line.toUpperCase());//toUpperCase()
console.log(`toLowerCase: `,line.toLowerCase());//toLowerCase()

console.log(`THIS IS TRIM METHODE: `, (line.trim( )));

 


