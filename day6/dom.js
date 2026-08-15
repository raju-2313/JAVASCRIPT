//tagname
let para = document.querySelectorAll("p"); // para.tagName = "P";
console.dir(para);

// to change the innertext of the para tag we use innerText keyword
// to change the innerhtml of the para tag we use innerHTML keyword
// to change the outerhtml of the para tag we use outerHTML keyword


//innerText


for(i=0;i<para.length;i++){
    para[i].innerText  = "HELLO THERE!!";
}

//innerHtml

let div = document.querySelector("div");
console.dir(div);
