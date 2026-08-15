let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para);

let c1 = para.getAttribute("id");
console.log(c1);

let d1 = para.getAttribute("class");
console.log(d1);


// setting attributes from directly javascript......

para.setAttribute("class","box");
console.log(para);

para.setAttribute("id","newId"); 
console.log(para);


//stying with node.style==>>>>>

// syntax: element.style.property = "value"
div.style.backgroundColor="green";
div.style.color="yellow";
div.style.fontSize="20px";




/// insert elements ==>>>>

let newBtn = document.createElement("button");
newBtn.innerText ="click me";
console.log(newBtn);


div.append(newBtn);// at  the end
div.prepend(newBtn);// at the starting 

div.before(newBtn); // at just before the div element
div.after(newBtn); //  at just after the div element

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>This is created with the help of createElement</i>";
newHeading.style.color = "white";
newHeading.style.fontSize = "12px";
newHeading.style.backgroundColor = "purple";

// para.remove();//to remove without editing the html file ....

div.before(newHeading);

const p = document.createElement("p");
document.body.appendChild(p);
p.innerText = "this is the new created p element added at the end of the body";
p.style.backgroundColor = "green";

const fragment = document.createDocumentFragment();

const section = document.createElement("section");
const ul = document.createElement("ul");

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");


li1.textContent = "this is list 1";
li2.textContent = "this is list 2";
li3.textContent = "this is list 3";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

section.appendChild(ul);
fragment.appendChild(section);


document.body.appendChild(fragment);

