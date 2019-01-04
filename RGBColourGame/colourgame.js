var numColours = 6;
var colours = [];
var pickedColour;

var squares = document.querySelectorAll(".square");
var colourDisp = document.getElementById("colourdisp");
var messageDisp = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

startGame();

function startGame(){
    //Set up the mode buttons
    for (var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function () {
            for (var j = 0; j < modeBtns.length; j++) {
                modeBtns[j].classList.remove("selected");
            }
            this.classList.add("selected");
            this.textContent === "Easy" ? numColours = 3 : numColours = 6;
            resetGame();
    
        });
    }
    
    //Set up the reset button event handler
    resetBtn.addEventListener("click", function () {
        resetGame();
    });
    
    //deal with the squares
    for (var i = 0; i < numColours; i++) {
    
        squares[i].addEventListener("click", function () {
            var clickedColour = this.style.backgroundColor;
    
            if (clickedColour === pickedColour) {
                messageDisp.textContent = "Correct!";
                changeColours(pickedColour);
                h1.style.backgroundColor = pickedColour;
                resetBtn.textContent = "PLAY AGAIN?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisp.textContent = "Try Again";
            }
        })
    }
    
    // do a game reset
    resetGame();
}

function changeColours(colour) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(numOfColours) {
    //make Array
    var arr = [];

    //populate array
    for (var i = 0; i < numOfColours; i++) {
        //get random colour and push into array
        arr[i] = getRandomColour();
    }

    //return array
    return arr;
}

function getRandomColour() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function resetGame() {
    //Generate a new set of colours
    colours = generateRandomColours(numColours);
    //Select one of the new colours as the pickedColour
    pickedColour = pickColour();
    // Change the displayed RGB string in the title
    colourDisp.textContent = pickedColour;
    //Change the colours of the squares
    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.backgroundColor = colours[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    resetBtn.textContent = "NEW COLOURS";
    messageDisp.textContent = "";
    h1.style.backgroundColor = "steelblue";
}