window.onload = function () {
    let gameLayout = new Array(9).fill(" ");
    let boardSquares = document.querySelectorAll("#board > div");
    
    boardSquares.forEach((square, index) => {  
        square.className = "square"
        square.id = `${index}`

    }
}