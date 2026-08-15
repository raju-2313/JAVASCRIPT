//priority (javascript)>>>>>>>>>(inline)......


let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) =>{
//     console.log("button was clicked!!");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// btn2.ondblclick = (evt) =>{
//     console.log("button was double clicked!!");
//     alert("HELLO!! THIS IS 2 CLICKS!");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// div1.onmouseover = (evt) =>{
//     console.log("Mouse is inside the div!!");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);//
// };

//node.addEventListener(event,callback)

const handler1 = ()=> console.log("button 1 was clicked - listner 1");


btn1.addEventListener("click",handler1);



btn1.addEventListener("click",()=>{
    console.log("button 1 was clicked - listner 2");
});

btn1.removeEventListener("click", handler1);//remove listner
