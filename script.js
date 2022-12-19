// hide the second
document.getElementById("ThankYou").style.display = "none";


// Get the values of button
const buttons = document.getElementsByTagName("button");
// console.log(buttons);

// This is the true solution for the iterations
for (let i = 0; i < 5; i++) {
    buttons[i].addEventListener("click", ()=>{
        document.getElementById("boxedMessage").innerHTML = `You've selected ${buttons[i].value} out of 5`;
    })
}

function getNewPage() {
    let submitButton = document.getElementById("submit-np");
    submitButton.addEventListener("click", ()=>{
        document.getElementById("main-content").style.display = "none";
        document.getElementById("ThankYou").style.display = "block";
    })
}
