const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
let history = [];

function appendTODisplay(input){

    if (display.value === "Error") {
        return;
    }
    
        display.value += input;
}


function clearDisplay(input){
    display.value = "";
}

function callculate(input){

   try {
        const equation = display.value;
        const result = eval(equation);
        
        //  Save to history list
        if(equation !== "") {


            const li = document.createElement("li");
            li.textContent = `${equation} = ${result}`;
            historyList.prepend(li); // Adds new math to the top
        }

        display.value = result;


    } catch(error) {
        display.value = "Error";
    }
}



function toggleHistory() {
    const panel = document.getElementById("history-panel");
    panel.classList.toggle("open");
}

function clearHistory() {
    historyList.innerHTML = "";
}