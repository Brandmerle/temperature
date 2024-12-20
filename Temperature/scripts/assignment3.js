
function convertTemp (tmp, scale){

    let tmp = prompt("Enter the temperature");
    let scale = prompt("Enter F or C");
    let Answer = 0;

    
    let result;
    if(scale= "F" ){
        Answer = (tmp * 9/5) + 32;
    }else{
        Answer = (tmp - 32) * 5/9;
         }
    document.getElementById("result").innerHTML="The converted temperature is: " + result;
        }