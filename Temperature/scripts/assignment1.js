console.log("Script");

let character = "Surfer";
let surfterm = "Cowabunga";
let animal = "sea gull";
let food = "peanut";
let bodypart = "head";


const place = "ocean";

console.log("---A Funny Surf Tale---")

console.log("A " + character + " paddled out into the " + place + ", ready to shred. As he caught a wave, he yelled, " + surfterm + "! and promptly fell off his board. A " + animal + " swooped up, mistaking his " + bodypart + " for a particularly large " + food + ". The man, covered in seaweed, started laughing.");

console.log("--- Different Version of the Story ---");

character = "Plumber";
surfterm = "Hang ten";
animal = "dolphin";
food = "cucumber";
bodypart = "leg";


console.log("A " + character + " paddled out into the " + place + ", ready to shred. As he caught a wave, he yelled, " + surfterm + "! and promptly fell off his board. A " + animal + " swooped up, mistaking his " + bodypart + " for a particularly large " + food + ". The man, covered in seaweed, started crying.");

function assignmentOne(character, surfterm, animal, food, bodypart){
    const place = "ocean";

    console.log("A " + character + " paddled out into the " + place + ", ready to shred. As he caught a wave, he yelled, " + surfterm + "! and promptly fell off his board. A " + animal + " swooped up, mistaking his " + bodypart + " for a particularly large " + food + ". The man, covered in seaweed, started crying.");
}

assignmentOne("dog", "shocka", "snake", "pizza", "hand");



let productName = prompt("Enter the product name: ");
let productPrice = Number(prompt("Enter the price: "));
console.log(productName);
console.log(productPrice);
console.log(sum(2,productPrice));

function addCart(price){
    Let total=0;
    total=total+price;
    return total;
}

total=addCart(productPrice);

function calculateTaxes(total){
    return 1.11 * total;
}
console.log("The total is: " + calculateTaxes(total));
document.write("<p>" + productName + " " + calculateTaxes(total).toFixed(2)) + "</p>";

let NUM1 = Number(prompt("Enter Number 1: "));
let NUM2 = Number(prompt("Enter Number 2: "));
let Total = 0

function subtraction (){
    Total=NUM1 - NUM2
    console.log("The result is: " + Total )
}