// Active state for number
function mouseOverOne() {
    document.getElementById("one").style.backgroundColor="hsl(25, 97%, 53%)";
    document.getElementById("one").style.color="hsl(0, 0%, 100%)";
    document.getElementById("two").style.backgroundColor= "hsl(216, 12%, 54%)";
    document.getElementById("two").style.color="hsl(0, 0%, 100%)";
}

function mouseOutOne() {
    document.getElementById("one").style.backgroundColor="hsl(216, 12%, 54%, 20%)";
    document.getElementById("one").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("two").style.backgroundColor= "hsl(216, 12%, 54%, 20%)";
    document.getElementById("two").style.color = "hsl(217, 12%, 63%)";
}

function mouseOverTwo() {
    document.getElementById("two").style.backgroundColor="hsl(25, 97%, 53%)";
    document.getElementById("two").style.color="hsl(0, 0%, 100%)";
    document.getElementById("three").style.backgroundColor= "hsl(216, 12%, 54%)";
    document.getElementById("three").style.color="hsl(0, 0%, 100%)";
    document.getElementById("one").style.backgroundColor= "hsl(216, 12%, 54%)";
    document.getElementById("one").style.color="hsl(0, 0%, 100%)";
}

function mouseOutTwo() {
    document.getElementById("two").style.backgroundColor="hsl(216, 12%, 54%, 20%)";
    document.getElementById("two").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("three").style.backgroundColor= "hsl(216, 12%, 54%, 20%)";
    document.getElementById("three").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("one").style.backgroundColor= "hsl(216, 12%, 54%, 20%)";
    document.getElementById("one").style.color = "hsl(217, 12%, 63%)";
}

function mouseOverThree() {
    document.getElementById("three").style.backgroundColor="hsl(25, 97%, 53%)";
    document.getElementById("three").style.color="hsl(0, 0%, 100%)";
    document.getElementById("four").style.backgroundColor= "hsl(216, 12%, 54%)";
    document.getElementById("four").style.color="hsl(0, 0%, 100%)";
    document.getElementById("two").style.backgroundColor= "hsl(216, 12%, 54%)";
    document.getElementById("two").style.color="hsl(0, 0%, 100%)";
}

function mouseOutThree() {
    document.getElementById("three").style.backgroundColor="hsl(216, 12%, 54%, 20%)";
    document.getElementById("three").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("four").style.backgroundColor= "hsl(216, 12%, 54%, 20%)";
    document.getElementById("four").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("two").style.backgroundColor= "hsl(216, 12%, 54%, 20%)";
    document.getElementById("two").style.color = "hsl(217, 12%, 63%)";
}

function mouseOverFour() {
    document.getElementById("four").style.backgroundColor="hsl(25, 97%, 53%)";
    document.getElementById("four").style.color="hsl(0, 0%, 100%)";
    document.getElementById("five").style.backgroundColor= "hsl(216, 12%, 54%)";
    document.getElementById("five").style.color="hsl(0, 0%, 100%)";
    document.getElementById("three").style.backgroundColor= "hsl(216, 12%, 54%)";
    document.getElementById("three").style.color="hsl(0, 0%, 100%)";
}

function mouseOutFour() {
    document.getElementById("four").style.backgroundColor="hsl(216, 12%, 54%, 20%)";
    document.getElementById("four").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("five").style.backgroundColor= "hsl(216, 12%, 54%, 20%)";
    document.getElementById("five").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("three").style.backgroundColor= "hsl(216, 12%, 54%, 20%)";
    document.getElementById("three").style.color = "hsl(217, 12%, 63%)";
}

function mouseOverFive() {
    document.getElementById("five").style.backgroundColor="hsl(25, 97%, 53%)";
    document.getElementById("five").style.color="hsl(0, 0%, 100%)";
    document.getElementById("four").style.backgroundColor= "hsl(216, 12%, 54%)";
    document.getElementById("four").style.color="hsl(0, 0%, 100%)";
}

function mouseOutFive() {
    document.getElementById("five").style.backgroundColor="hsl(216, 12%, 54%, 20%)";
    document.getElementById("five").style.color = "hsl(217, 12%, 63%)";
    document.getElementById("four").style.backgroundColor= "hsl(216, 12%, 54%, 20%)";
    document.getElementById("four").style.color = "hsl(217, 12%, 63%)";
}

// Get the values of button



// Show other the "Thank You" Page/Text ??
// function newPage() {
//     // Add an if statement to verify if element button was clicked;
//     window.location.href = "thank-you.html";
// }