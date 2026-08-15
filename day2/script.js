// ARITHMETIC OPERATORS


let a = 5;
let b = 3;

console.log("a+b =", a+b); 
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a%b =", a%b);

console.log("a**b =", a**b);
console.log("b**a =", b**a);

// unary operators 



// console.log(a++); // post increment
// console.log(++a); // pre increment
// console.log(a--); // post decrement
// console.log(--a); // pre decrement

//Assignment operators 

// a += b;// a = a + b
// console.log(a);
// a -= b; // a = a - b
// console.log(a);
// a *= b; // a = a * b
// console.log(a);
// a /= b;// a = a / b
// console.log(a);
// a **= b;// a = a ** b
// console.log(a);

//comparison operators

console.log(a==b);// 
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a===b);
console.log(a!==b);


//Logical operators 

let con1 = a>b;
let con2 = a==5;

console.log("cond1 && con2 =",con1 && con2);
console.log("con1 || con2 =",con1 || con2);
console.log("!con1 =",!con1);



//conditional statements 


//if -selse statement 

let x = 10;

if(x%2==0 ){
    console.log("Number is even..");
}
else{
    console.log("Number is odd..");
}

// ternary operator
{
let age = 18;


//there are two ways to show the reult 

//way 1 
let result = age >= 18 ? "adult" : "minor"; // if the condition is true then go with adult if it is not true then go with the minor 
console.log(result);


//way 2

age>= 18 ? console.log("adult") : console.log("minor");
}



//practice 1 

{
    
let num = prompt("Enter your number : ");

if(num % 5 == 0){
    console.log(num ," is a multiple of 5");
}
else{
    console.log(num, " is not a multiple of 5");
}

}

// practice 2 


{
    let score = prompt("Enter your score (0-100):");
    let grade;
    if(score>90 && score <=100){
        grade =  "A";
    }
    else if(score>80 && score <=90){
        grade =  "B";
    }
    else if(score>70 && score <=80){
        grade =  "C";
    }
    else if(score>60 && score <=70){
        grade =  "D";
    }
    else if(score>50 && score <=60){
        grade =  "E";
    }
    else{
        grade =  "F";
    }

    console.log("According to your score you provided , your grade is",grade)
}


{
    // for(i )
}