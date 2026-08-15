/* q1) Create a new button element. Give it background color of red & text color
 of white.
 Insert the button as the first element inside the body tag.*/

let newbtn = document.createElement("btn");
console.log(newbtn);

newbtn.innerText = "Click Me!";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";
newbtn.style.padding = "5px";
newbtn.style.borderRadius = "5px";
newbtn.style.border = "none";
newbtn.style.cursor = "pointer";
newbtn.style.fontSize = "14px";
newbtn.style.fontWeight = "bold";
newbtn.style.textAlign = "center";
newbtn.style.display = "block";
newbtn.style.width = "100px";
newbtn.style.height = "20px";
newbtn.style.padding = "10px";
newbtn.style.marginLeft = "180px";


document.body.prepend(newbtn);//first element....!!


/* q2) Create a tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the element.
Did you notice. how you overwrite the class name when you add a new one?
Solve this problem using classList. */


let para = document.querySelector("p");
console.log(para);


// para.setAttribute("class","newClass");//overrrides the class 

// so we will use the classList

para.classList.add("newClass");  // adds the class without overrriding