// for (let i = 1; i<=5; i++) {
//     console.log("Hello!!");
// }

// calculate sum of 1 to n numbers!!!!.......


    // let sum = 0;
    // let n = prompt("Enter the value of n");
    
    // for(let i=1;i<=n;i++)
    // {
    //     sum+=i;

    // }
    // console.log("sum = ", sum);

// while loop


    // let i = 1;
    // while(i<=10)
    // {
    //     console.log("Hey there!!!");
    //     i++;
    // }


// do while 

    // do {
    //     console.log("i=",i);
    //     i++;
    // }while(i<=10);



// for-of Loop

// for(let val of strVar)

    // let str = "HELLO";
    // for(let i of str)
    // {
    //     console.log("i = ",i); // prints all the 
    // }



// for-in Loop

// for(let key in objVar)

    // let student = {
    //     name: "Rahul",
    //     age: 22,
    //     city: "Delhi"
    // };

    // for(let key in student)
    // {
    //     console.log("key = ",key, "value = ",student[key]);
    // }


// practice q1

    
    for(let num=0;num<=100;num++){

        if(num%2==0)
            {
                console.log(num); // print even numbers
            }
    }


// practice q2

/* create a game where you start with any random game number . 
    Ask user to keep guessing the game number until the user enters  correct value.. */

    // let gameNum = 50;
    // let tries=1;



    // let userNum = prompt("Guess the number :-  ");

    // while(userNum != gameNum)
    // {
    //     userNum = prompt("Wrong guess! Enter the number again :-  ");
    //     tries++;
    // }
    // console.log("Congratulations , you entered the right number in", tries , "tries");



/*==========STRINGS=========*/



let str = "HELLO";
let str1 = 'HELLO';

console.log(str[2]);


// template literals....

let specialString = `This is a template literal`;
console.log(specialString);  

// use case of the template literals with a example 

let obj = {
    item : "car",
    price : 500000,

};

let output = `The cost of the ${obj.item} is ${obj.price} rupees`; // ${expression} ->> string interpolation is used to insert the value of a variable in a string
console.log(output);

console.log("The cost of the",obj.item,"is",obj.price,"rupees");


/* we can conclude from the above example that using ( ` ` ) the template
 lateral makes the string much more readable and easy to work with*/


// \n ->> new line 
// \t ->> TAB space 
// \r ->> carriage return 
  


// practice q1..

    let fullname = prompt("Enter your full name :");
    let username = "@" + fullname + fullname.length;
    console.log(username);