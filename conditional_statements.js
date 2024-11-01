// if (condition) {execution =>if condition is true than execute }
/*
let age = 15;

// if (age<=18){
//     console.log("A child")
// }
// else if ( age>= 60){
//     console.log("Senior citizen")
// }
// else {console.log('An Adult')}



//Turnary operator ,simpler,compact if-else ( condition ? True output: false output)
let result= age >=18 ? "adult":"not adult";
console.log(result)
*/

//Switch case *compare based on the perticular expression out of different cases
/*switch (expr){
    case1 expr:
    break;
    case2 expr:
    break;
    }
*/







//Get user to input a number using a prompt ("Enter a number: ") Check if the number is amultiple of 5 or not.
/*
let number=prompt('Enter the Number ');

if(number%5===0){
    console.log(number," is the multiple of 5")
    document.write(number," is the multiple of 5")
}
else{
    console.log( number,' is not the multiple of 5')
    document.write(number," is not the multiple of 5")
}
*/

// Write a code which can give grades to students according to their scores:
let scores = prompt( " the the marks of the student");

if(scores>=90 && scores<=100){
    Grade = `A`;
}
else if (scores>=70 &&  scores<=89){
    Grade = `B`;
}
else if (scores>=60 &&  scores<=69){
    Grade = `C`;
}
else if (scores>=50 &&  scores<=59){
    Grade = `D`;
}
else if (scores>=0 &&  scores<=49){
    Grade = `F`;
}


console.log( "Grade is ",Grade);