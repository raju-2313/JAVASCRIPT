//q1

let h2 = document.querySelector("h2");
console.log(h2);

h2.innerText = h2.innerText + " from Apna colleage..";


//q2 

let div = document.querySelectorAll(".box");
console.log(div);

for(i=0;i<3;i++){
    div[i].innerHTML = `Hey there!!${i+1}`;
}