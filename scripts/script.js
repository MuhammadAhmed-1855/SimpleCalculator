const lightTheme = "styles/light_mode.css";
const darkTheme = "styles/dark_mode.css";
const sunIcon = "images/Sun_Icon.png";
const moonIcon = "images/Moon_Icon.png";
const themeIcon = document.getElementById("ThemeIcon");
const outputResult = document.getElementById("Result");
const Heading = document.getElementById("Heading");
const concludeResult = document.getElementById("ConcludedResult");

function FactorialOperation(number) {
    value = 1;
    for(i=2; i<=number; i++) {
        value = value * i;
    }
    return(value);
}

function ModulousOperation(number1, number2) {
    let value = number1%number2;
    return(value);
}

function PermutationOperation(number1, number2) {
    numerator = FactorialOperation(number1);
    denominator = FactorialOperation(number1-number2);
    value = numerator/denominator;
    return(value);
}

function CombinationOperation(number1, number2) {
    permutationValue = PermutationOperation(number1, number2);
    denominator = FactorialOperation(number2);
    value = permutationValue/denominator;
    return(value);
}

function Calculate(output) {
    const calculation = JSON.stringify(outputResult.value);

    //Statistic Operations

        // if(calculation.includes('+') || calculation.includes('-') || calculation.includes('*') || calculation.includes('/')) {
        //     outputResult.value = "ERROR: Arithematic function cannot be present in Factorial.";
        // }

    if(calculation.includes('P')) {
        const calculateArray = calculation.split("P");
        num1 = calculateArray[0].substring(1);
        num2 = calculateArray[1].substring(0,calculateArray.length-1);
        outputResult.value = PermutationOperation(num1, num2);
        concludeResult.value = num1+"P"+num2+"="+outputResult.value;
    }
    else if(calculation.includes('C')) {
        const calculateArray = calculation.split("C");
        num1 = calculateArray[0].substring(1);
        num2 = calculateArray[1].substring(0,calculateArray.length-1);
        outputResult.value = CombinationOperation(num1, num2);
        concludeResult.value = num1+"C"+num2+"="+outputResult.value;
    }
    else if(calculation.includes('%')) {
        const calculateArray = calculation.split("%");
        num1 = calculateArray[0].substring(1);
        num2 = calculateArray[1].substring(0,calculateArray.length-1);
        outputResult.value = ModulousOperation(num1, num2);
        concludeResult.value = num1+"%"+num2+"="+outputResult.value;
    }
    else if(calculation.includes('!')) {
        const calculateArray = calculation.split("!");
        num = Number(calculateArray[0].substring(1));
        outputResult.value = FactorialOperation(num);
        concludeResult.value = num+"!"+"="+outputResult.value;
    }
    
    //Arithematic Operations

    else {
        const calculatedoutput = eval(output || null);
        if(isNaN(calculatedoutput)) {
            outputResult.value = "ERROR: Cannot divide by 0.";
            setTimeout(()=>{
                outputResult.value = "";
            }, 1300);
        }
        else {
            concludeResult.value = outputResult.value+"=";
            outputResult.value = calculatedoutput;
            concludeResult.value = concludeResult.value + outputResult.value;
        }
    }
}

function ChangeTheme() {
    const theme = document.getElementById("Theme");
    setTimeout(()=> {
        Heading.innerHTML = "Calculator";
    }, 1000);
    if(theme.getAttribute("href") === lightTheme) {
        theme.setAttribute("href", darkTheme);
        themeIcon.setAttribute("src", sunIcon);
        Heading.innerHTML = "Dark Mode 🌙";
    }
    else {
        theme.setAttribute("href", lightTheme);
        themeIcon.setAttribute("src", moonIcon);
        Heading.innerHTML = "Light Mode ☀️";
    }
}

function LiveScreen(inputValue) {
    if (!outputResult.value) {
      outputResult.value = "";
    }
    outputResult.value += inputValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(event) {
    event.preventDefault();
    if (event.key === "0") {
        outputResult.value += "0";
    }
    else if (event.key === "1") {
        outputResult.value += "1";
    }
    else if (event.key === "2") {
        outputResult.value += "2";
    }
    else if (event.key === "3") {
        outputResult.value += "3";
    }
    else if (event.key === "4") {
        outputResult.value += "4";
    }
    else if (event.key === "5") {
        outputResult.value += "5";
    }
    else if (event.key === "6") {
        outputResult.value += "6";
    }
    else if (event.key === "7") {
        outputResult.value += "7";
    }
    else if (event.key === "7") {
        outputResult.value += "7";
    }
    else if (event.key === "8") {
        outputResult.value += "8";
    }
    else if (event.key === "9") {
        outputResult.value += "9";
    }

    if (event.key === "+") {
        outputResult.value += "+";
    }
    else if (event.key === "-") {
        outputResult.value += "-";
    }
    else if (event.key === "*") {
        outputResult.value += "*";
    }
    else if (event.key === "/") {
        outputResult.value += "/";
    }
    
    if (event.key === ".") {
        outputResult.value += ".";
    }
    
    if (event.key === "Enter") {
        Calculate(Result.value);
    }
    
    if (event.key === "Backspace") {
        const resultInput = outputResult.value;
        outputResult.value = resultInput.substring(0, outputResult.value.length - 1);
    }
}