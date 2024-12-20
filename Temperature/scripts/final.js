let startValue = prompt ("Please enter a start value: ")
let endValue = prompt ("Please enter an end value: " )
let scale = prompt ("Please enter F for Fahrenheit or C for Celsius: ")
let result = 0


function convertTemperatureRange() {

    for (let i = startValue; i < endValue; i++){
        
        if (scale === "C") {
            result = (i * 9/5) + 32; //Fahrenheit
        }else (scale === "F") 
            result = (i - 32) * 5/9; //Celsius5    
}
document.getElementById("answer").innerHTML+=`<li>${result} + ${scale}</li>`;

        }

