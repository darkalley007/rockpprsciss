let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#mess");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");


const genCompChoice = () => {
    const opts = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return opts[randIdx];
};


const drawGame = () => {
    message.innerText = "Dang it was a draw"
    message.style.backgroundColor = "purple"
};

const showWinner = (userWin , userChoice, compChoice) => { // Accepts the  userWin as an argument
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        message.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "darkgreen";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        message.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "blue";
    }
};

const playgame = (userChoice) => {
  
    // COMP CHOICE
    const compChoice = genCompChoice();


    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin ; // Declares `userWin` 

        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else { // scissors
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin ,userChoice , compChoice); // Pass `userWin` to the function
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
