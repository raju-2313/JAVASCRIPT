// asynchronous type of functions:

//set timeout
//set interval
//set prompt
//set alert



function hello() {
    console.log("hello");

}
setTimeout(hello,2000)//timeout 2000ms = 2sec

let body = document.querySelector("body");

function changeColor (){
    document.body.style.background = "linear-gradient(to right, #b38851ff, #024a57ff)"
}

setTimeout(changeColor, 3000);


// callbacks - calling another function inside a function


// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback)
// {
//     sumCallback(a,b);
// }

// calculator(1,2,sum);//don't use sum()


//example to understand....

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`data:${dataId}`);
            resolve(`success`);          
        }, 2000);
    })
};


//callback hell...aagya
// getData(1,()=>{
//     console.log(`getting data2...`)
//     getData(2,()=>{
//         console.log(`getting data3...`)
//         getData(3);
//     });
// });


//promise chain 

// let p1 = getData(1);
// p1.then((res)=>{
//     console.log(res);
//     let p2 = getData(2);
//     p2.then((res)=>{
//         console.log(res);
//         let p3 = getData(3);
//         p3.then((res)=>{
//             console.log(res);
//         });
//     });
// });

// getData(5)
//     .then((res)=>{
//         return getData(6);
//     })
//     .then((res)=>{
//         return getData(7);
//     })
//     .then((res)=>{
//         console.log(`Promise fulfilled!`);
//     });

    //real promise chaining!!!
    
    
    
    
// getData(2);
// getData(3);

//promises....

// let promise = new Promise((resolve,reject)=>{
//     console.log(`I am a promise...`);
//     resolve(`sucess`);
//     reject("some error");
// });

//promise example

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("sucess");
//             if(getNextData){
//                 getNextData();
//             };
//         },5000);  
//     })
    
// };
//======================================================

// const getPromise = () => {
//     return new Promise((resolve,reject)=>{
//         console.log(`I am a promise..`);
//         resolve(`sucess!!`);
//     });
// };

// let promise = getPromise();

// promise.then(()=>{
//     console.log(`promise fulfilled!!`);
    
// });

function asyncFunction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`some data1`);
            resolve(`sucess`);
        },3000);
    });
}

function asyncFunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`some data2`);
            resolve(`sucess`);
        },3000);
    });
}

function asyncFunction3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`some data3`);
            resolve(`sucess`);
        },3000);
    });
}


// console.log(`fetching data1`);
// let d1 = asyncFunction1();

// d1.then((res)=>{
//     console.log(`fetching data2..`);
//     let d2 = asyncFunction2();
//     d2.then((res)=>{
//         console.log(`fetching data3...`);
//         let d3 = asyncFunction1();
//         d3.then((res)=>{
//             console.log(`promise fulfilled!!`);
//         })
//     })
// })

async function hello(){
    console.log(`hello`);//returns automatically a promise when we use async 

}


function api(){
    return new Promise((resolve,reject) => {
     setTimeout(() => {
            console.log(`weather data...`);
            resolve(200);
     }, 2000);
    });
}


async function getWeatherData() {
    await api(); // first
    await api();
}


async function getAllData(){
    console.log(`getting data 1..`);
    await getData(1);
    console.log(`getting data 2..`);    
    await getData(2);
    console.log(`getting data 3..`);    
    await getData(3);

}// data 2 will wait for the dat 1 success and then only move to the execution

// getAllData();


//IIFE : Immediately Ivoked Function Expression (immeadiately as soon as it is defined...)

(async function () {
    await api(); // first
    await api();
})();