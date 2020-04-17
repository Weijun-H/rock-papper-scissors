const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });
        //Computer Option
        const computerOptions = ['rock', 'paper', 'scissors']
        options.forEach(option => {
            option.addEventListener("click", () => {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];
                //Here is where we will call compare hands
                computerHands(option.textContent, computerChoise);
                updataScore();
                //Updata Image

                setTimeout(() => {
                    playerHand.src = `./assets/${option.textContent}.png`;
                    computerHand.src = `./assets/${computerChoise}.png`;
                }, 2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            });
        });
    };

    const updataScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const computerHands = (playerChoise, computerChoise) => {
        //Updata Text
        const winner = document.querySelector('.winner');
        if (playerChoise === computerChoise) {
            winner.textContent = 'It is a tie';
            return;
        }
        //Check for Rock
        if (playerChoise === 'rock') {
            if (computerChoise === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                return
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                return;
            }
        }
        //Check for paper
        if (playerChoise === 'paper') {
            if (computerChoise === 'scissors') {
                winner.textContent = 'Computer Wins';
                cScore++;
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                return;
            }
        }
        //Check for scissor
        if (playerChoise === 'scissors') {
            if (computerChoise === 'rock') {
                winner.textContent = 'Computer Wins';
                cScore++;
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                return;
            }
        }
    }

    //It call all the innner function
    startGame();
    playMatch();
};

//start the game function
game();