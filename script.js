ticTacButtons = document.querySelectorAll("a");
resetButton = document.querySelector("#resetButton")

let countClicks = 0;

ticTacButtons.forEach(function changeColor(turn) {
    let buttonStyle = turn.style;
    turn.addEventListener('click', function() {
        // console.log(countClicks)
        if (countClicks % 2 === 0 && buttonStyle.backgroundColor != 'red' && buttonStyle.backgroundColor != 'blue') {
            buttonStyle.backgroundColor = 'red';
            countClicks += 1;
        } else if (buttonStyle.backgroundColor != 'red' && buttonStyle.backgroundColor != 'blue') {
            buttonStyle.backgroundColor = 'blue';
            countClicks += 1;
        }
        winLogic();
    })
});



// 012 || 345 || 678 rows
// 036 || 147 || 258 columns
// 048 || 246 diagnols

function winLogic() {
    if (ticTacButtons[0].style.backgroundColor === ticTacButtons[1].style.backgroundColor && ticTacButtons[1].style.backgroundColor === ticTacButtons[2].style.backgroundColor && ticTacButtons[0].style.backgroundColor !== "") {
        console.log("you win");
    } else if (ticTacButtons[3].style.backgroundColor === ticTacButtons[4].style.backgroundColor && ticTacButtons[4].style.backgroundColor === ticTacButtons[5].style.backgroundColor) {
        console.log("you win");
    } else if (ticTacButtons[6].style.backgroundColor === ticTacButtons[7].style.backgroundColor && ticTacButtons[7].style.backgroundColor === ticTacButtons[8].style.backgroundColor && ticTacButtons[6].style.backgroundColor !== "") {
        console.log("you win");
    } else if (ticTacButtons[0].style.backgroundColor === ticTacButtons[3].style.backgroundColor && ticTacButtons[3].style.backgroundColor === ticTacButtons[6].style.backgroundColor && ticTacButtons[0].style.backgroundColor !== "") {
        console.log("you win");
    } else if (ticTacButtons[1].style.backgroundColor === ticTacButtons[4].style.backgroundColor && ticTacButtons[4].style.backgroundColor === ticTacButtons[7].style.backgroundColor && ticTacButtons[1].style.backgroundColor !== "") {
        console.log("you win");
    } else if (ticTacButtons[2].style.backgroundColor === ticTacButtons[5].style.backgroundColor && ticTacButtons[5].style.backgroundColor === ticTacButtons[8].style.backgroundColor && ticTacButtons[2].style.backgroundColor !== "") {
        console.log("you win");
    } else if (ticTacButtons[0].style.backgroundColor === ticTacButtons[4].style.backgroundColor && ticTacButtons[4].style.backgroundColor === ticTacButtons[8].style.backgroundColor && ticTacButtons[0].style.backgroundColor !== "") {
        console.log("you win");
    } else if (ticTacButtons[2].style.backgroundColor === ticTacButtons[4].style.backgroundColor && ticTacButtons[4].style.backgroundColor === ticTacButtons[6].style.backgroundColor && ticTacButtons[2].style.backgroundColor !== "") {
        console.log("you win");
    }
}
    
    