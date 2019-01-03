var colours = generateRandomColours(6);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisp = document.getElementById("colourdisp");
var messageDisp = document.querySelector("#message");
var h1 = document.querySelector("h1");

colourDisp.textContent = pickedColour;

for (var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colours[i];

    squares[i].addEventListener("click", function(){
        var clickedColour = this.style.backgroundColor;

        if (clickedColour === pickedColour){
            messageDisp.textContent = "Correct!";
            changeColours(pickedColour);
            h1.style.backgroundColor = pickedColour;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisp.textContent = "Try Again";
        }
    })
}

function changeColours(colour){
    for (var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour(){
    var random = Math.floor(Math.random() * colours.length );
    return colours[random];
}

function generateRandomColours(numOfColours){
    //make Array
    var arr = [];

    //populate array
    for (var i = 0; i < numOfColours; i++){
        //get random colour and push into array
        arr[i] = getRandomColour();
    }

    //return array
    return arr;
}

function getRandomColour(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}