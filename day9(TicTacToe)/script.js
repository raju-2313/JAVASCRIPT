let boxes  = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let scoreXEl = document.querySelector("#score-x");
let scoreOEl = document.querySelector("#score-o");
let resetScoresBtn = document.querySelector("#reset-scores");

let scoreX = 0;
let scoreO = 0;

let turnO = true; // player O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{

    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText = "O";
            turnO = false;   
        }
    
        else{
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;///disables the already played button

        checkWinner();

    })

});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    })
}


const showWinner = (winner) => {
    
    msg.innerText = `Congratulations, ${winner} Wins!`;
    msgContainer.classList.remove("hide");
    // update scoreboard without altering core game logic
    if(winner === "X"){
        scoreX += 1;
        if(scoreXEl) scoreXEl.innerText = scoreX;
    } else if(winner === "O"){
        scoreO += 1;
        if(scoreOEl) scoreOEl.innerText = scoreO;
    }
    disableBoxes();
};

const checkWinner = () => {

    for(let pattern of winPatterns){

        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

    


    if(position1 != "" && position2 != "" && position3 != ""){
        if(position1 === position2 && position2 === position3){
        console.log(`Winner ${position1}`);
        showWinner(position1);
    }
    }

}};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

if(resetScoresBtn){
    resetScoresBtn.addEventListener("click",()=>{
        scoreX = 0; scoreO = 0;
        if(scoreXEl) scoreXEl.innerText = scoreX;
        if(scoreOEl) scoreOEl.innerText = scoreO;
    });
}

