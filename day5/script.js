// functions -->>> Block of the code that performs a specific task !!

function myFunction ()
{
    console.log("WELCOME!!");
    console.log("Here we go........");

}

myFunction();
myFunction();


// with the help of arguments



// wrong method here ---->>>> it only give answer Nan

// function Function(msg,n)
// {
//     console.log(msg * n);
// }
// Function("I love JS", 10);

// correct version 

function Function(msg,n)
{
    for(i=0;i<n;i++)
    {
        console.log(msg);
    }
}

Function("I love JS", 10);



//sum of two num 

function sum(x,y)
{
    s = x+y;
    return s; //s is returned to the function

    //after the return statement the code written below it will not be considered or executed!!!
    console.log("Thank you!!!!");       

}

let val = sum(5,9);
console.log(val);



// arrow function 



const  arrowsum = (a,b)=>{
    return a+b;

}
console.log(arrowsum(2,3));

// forEach


let arr = [1,2,3,4,5,6];

arr.forEach((val)=>{
    console.log(val);
});

// Map 
// creates a new array with the results of some operation.
//The value its callback returns are used to form new array 

let newArr = arr.map((val)=>{
    return val * 2;    
})
console.log(newArr);

// filter 
// filters out the value in the basis of the condition --->>> boolean value 

let evenArr = arr.filter((val)=>{
    return val % 2 == 0;
})

let oddArr = arr.filter((val)=>{
    return val % 2 !== 0;
})
console.log("Even values: ",evenArr);
console.log("Odd values: ",oddArr);


//==>>>>reduce method
//res takes first element which is 1 and curr takes 2 and the opration of (res + curr) executes and
//it got returned to the res like for example (1+2) goes to res and now res = 3
//then curr takes 3 and the opration of (res + curr) executes and 
//it got returned to the res like for example (3+3) goes to res and now res = 6 
//... and this continues until the end of the array

//summation 
const output = arr.reduce((res,curr)=>{
    return res+curr;
})

console.log("Summation:",output);


//maximum value finding

//--->using if

// const max = arr.reduce((res,curr)=>{
//     if(res>curr)
//     {
//         return res;
//     }
//     else
//     {
//         return curr;
//     }
// })


//-->> using ?:(ternary operator)
const max = arr.reduce((res,curr)=>{
    return res>curr?res:curr;
})


console.log("Maximum:",max);

//minimum value finding

// ->>> using if
// const min = arr.reduce((res,curr)=>{
//     if(res<curr)
//     {
//         return res;
//     }
//     else
//     {
//         return curr;
//     }
// })

//-->> using ?:(ternary operator)
const min = arr.reduce((res,curr)=>{
    return res<curr?res:curr;
})


console.log("Minimum:",min);