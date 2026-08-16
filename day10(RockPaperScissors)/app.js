let useScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); 
    return options[randIdx];
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


const drawGame = () => {
    msg.innerText = `Game was Draw.`;
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const animateScore = (id, newScore) =>{
    const score = document.querySelector(`#${id}`);

    const oldScore = score.innerText;

    score.setAttribute("data-old",oldScore);
    score.setAttribute("data-new",newScore);

    score.classList.remove("score-slide");

    void score.offserWidth;

    score.classList.add("score-slide");
    
    setTimeout(() => {
        score.innerText = newScore;
        score.classList.remove("score-slide");
    },350);
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        useScore++;
        animateScore("user-score",useScore);
        msg.innerText = `You Win! Your ${userChoice} beats Comp's ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        animateScore("comp-score",compScore);
        msg.innerText = `You Loose! Comp's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(`User Choice = ${userChoice}`);
    console.log(`Computer Choice = ${compChoice}`);


    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        }

        else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }

        else{
            userWin = compChoice ==="rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
        
    }
};



