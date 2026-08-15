/* 1.a)Take a number n as input from user. Create an array of numbers from I to n.
b)Use the reduce method to calculate sum of all numbers in the array.
c)Use the reduce method to calculate product of all numbers in the array. */

let n = prompt("Enter a number n: ");

let arr = new Array (n);//array creation 

for(let i = 0; i<n; i++)
{
    arr[i] = i+1; //filling array 
}
console.log(arr);//displaying array

//======================================
//reduce method for summation

const sum = arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("Sum:",sum);  //summation

//======================================
//reduce method for product

const prod = arr.reduce((res,curr)=>{
    return res*curr;
})

console.log("Product:",prod);  //product  