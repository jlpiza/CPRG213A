/****************** YOUR NAME: JESSICA PIZA

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

//Allows the JS to execute only when full page is loaded
document.addEventListener("DOMContentLoaded", function () {


    if (window.scriptAlreadyLoaded) {
        // Avoids duplicate execution (because jscript was cited 2 times on HTML)
        console.log("Script já carregado, ignorando execução duplicada.");
        return;
    }
    // Mark the script as loaded
    window.scriptAlreadyLoaded = true; 

    
// Declare initial model name and value
let modelName = "XYZ"; 
let duration = 0; 


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function recalculate() {
    // variable that represent the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");

    // check the value of the modelName variable, and use that to calculate the new total cost:
    let totalCost = 0;
    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }

    // set the value of the calculated-cost element's innerHTML to this new value
    costLabel.innerHTML = totalCost.toFixed(2);
}

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

// variable that represent the "Switch Model" pseudo-button 
let modelButton = document.getElementById("model-button"); 

function changeModel() {
    // variable that represent the model-text span element
    let modelText = document.getElementById("model-text");

    // Changes the modelName and updates the text 
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    // Recalculates the cost based on the new model
    recalculate();
}
// Associates the function with the button click event
modelButton.addEventListener("click", changeModel);


/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

//variable that represent the "Change Duration" pseudo-button.
let durationButton = document.getElementById("duration-button"); // Botão "Change Duration"

function changeDuration() {
    // variable that represent the duration-text span element
    let durationText = document.getElementById("duration-text");

    // prompt() the user for a new duration
    let newDuration = parseInt(prompt("Enter the number of days you want to book:"), 10);

    if (newDuration > 0) {
        duration = newDuration; // update the global variable 'duration'
        durationText.innerHTML = duration; // update the text on HTML
        recalculate(); 
    } else {
        alert("Please enter a valid positive number.");
    }
}

// Associates the function with the button click event
durationButton.addEventListener("click", changeDuration);

});