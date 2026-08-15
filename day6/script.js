//alert with custom message....
// alert("HELLO THERE!!!");

//grabbing element by id....
let heading = document.getElementById("header");
console.dir(heading);

let headings = document.getElementsByClassName("heading1");
console.dir(headings);
console.log(headings);


//query selctor=>>>>>


//using the tag we have to use it as simple ("tag")

let elements = document.querySelector("p");//first
console.dir(elements);
console.log(elements);

let allElements = document.querySelectorAll("p");//alll
console.dir(allElements);
console.log(allElements);


//using the class name we have to use it as (".class_name")


let classaname = document.querySelector(".heading1");//first
console.dir(classaname);
console.log(classaname);

let allclassname = document.querySelectorAll(".heading1");//all
console.dir(allclassname);
console.log(allclassname);

//using the id we have to use it as ("#id_name")
let idname = document.querySelector("#header");//first
console.dir(idname);
console.log(idname);

let allidnames = document.querySelectorAll("#header");//all
console.dir(allidnames);
console.log(allidnames);