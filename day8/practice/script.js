let btn = document.querySelector('.btn');
let body = document.querySelector("body");
let currmod = "light";

btn.addEventListener('click',()=>{
    if(currmod ==="light"){
        currmod = "dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currmod = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

})