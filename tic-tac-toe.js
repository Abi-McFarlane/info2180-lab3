window.onload = function () {
    let gameLayout = new Array(9).fill(" ");
    let status = document.getElementById("status")
    let board = document.getElementById("board");
    let boardSquares = document.querySelectorAll("#board > div");
    let gameWon = false;

    let playerIcon = "X" ;
    
    //Adding the classes square and adding listeners to each square
    boardSquares.forEach((square, index) => {  
        square.className = "square"
        square.id = `${index}`

        //Adds X or O to a square when clicked
        square.addEventListener('click', () => {
            if(square.innerHTML === "" && !gameWon){
                square.classList.add(playerIcon)
                square.innerHTML = playerIcon;
                gameLayout[parseInt(square.id)] = playerIcon
                findWinner()
                playerIcon = playerIcon === "X" ? "O" : "X";      
            }
        })

        //Changess style when mouse is hovered over square
        square.addEventListener('mouseover', () => {
            square.classList.add("hover")
        })
        //Puts it back to original style
        square.addEventListener('mouseout', () => {
            square.classList.remove("hover")
        })
    })

    //Checks for winner and updates the status
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    //If there is a winner, checks who won and congratulates them
    const findWinner = () => {
        if(checkPossibility("XXX")){
            status.classList.add("you-won")
            status.innerHTML = "Congratulations! X is the Winner!"
            gameWon = true
        } else if(checkPossibility("OOO")){
            status.classList.add("you-won")
            status.innerHTML = "Congratulations! O is the Winner!"
            gameWon = true
        }
    }

    //Looks if there is a winner
    const checkPossibility = (str) => {
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = gameLayout[winCondition[0]];
            const b = gameLayout[winCondition[1]];
            const c = gameLayout[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a + b + c === str) {
                return true
            }
        }
        return false

    }

    //Restarts the game
    let newGameButton = document.getElementsByClassName("btn")[0]
    newGameButton.addEventListener('click', () => {
        gameLayout = new Array(9).fill(" ");
        status.classList.remove("you-won")
        status.innerHTML = "Move your mouse over a square and click to play an X or an O."
        gameWon = false
        boardSquares.forEach(square => {
            if(square.classList.contains("X")){
                square.classList.remove("X")
            }else if(square.classList.contains("O")){
                square.classList.remove("O")
            }
            square.innerHTML = ""
        })
    })

}

