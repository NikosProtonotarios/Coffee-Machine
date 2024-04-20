let machineWater = prompt("Write how many ml of water the coffee machine has:");
let machineMilk = prompt("Write how many ml of milk the coffee machine has:");
let machineBeans = prompt("Write how many grams of coffee beans the coffee machine has:");
let cupsUser = prompt("Write how many cups of coffee you will need:");

let cupsWater = Math.floor(machineWater / 200);
let cupsMilk = Math.floor(machineMilk / 50);
let cupsBeans = Math.floor(machineBeans / 15);

let availableCups = Math.min(cupsWater, cupsMilk, cupsBeans);

if (availableCups == cupsUser) {
    console.log("Yes, I can make that amount of coffee");
} else if (availableCups > cupsUser) {
    console.log("Yes, I can make that amount of coffee (and even " + (availableCups - cupsUser) + " more than that)");
} else {
    console.log("No, I can make only " + (availableCups) + " cups of coffee");
}

let water = 400;
let milk = 540;
let coffeeBeans = 120;
let cups = 9;
let money = 550;

console.log("The coffee machine has:");
console.log(water + " ml of water");
console.log(milk + " ml of milk");
console.log(coffeeBeans + " g of coffee beans");
console.log(cups + " disposable cups");
console.log(money + " of money");
console.log("");
let option = prompt("Write action (buy, fill, take):");

if (option == "buy") {
    let buy = prompt("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    if (buy == 1) {
        water = water - 250;
        coffeeBeans = coffeeBeans - 16;
        money = money + 4;
        cups = cups - 1;
        currentIngredients();
    }  else if (buy == 2)   {
        water = water - 350;
        milk = milk - 75;
        coffeeBeans = coffeeBeans - 20;
        money = money + 7;
        cups = cups - 1;
        currentIngredients();
    } else if (buy == 3) {
        water = water - 200;
        milk = milk - 100;
        coffeeBeans = coffeeBeans - 12;
        money = money + 6;
        cups = cups - 1;
        currentIngredients();
    }
} else if (option == "fill") {
    addIngredients();
    console.log("");
    currentIngredients();
} else if (option == "take") {
    console.log("I gave you " + money);
    money = 0;
    console.log("");
    currentIngredients();
}

function addIngredients() {
    let addWater = parseInt(prompt("Write how many ml of water you want to add:"));
    water = (addWater + water);
    let addMilk = parseInt(prompt("Write how many ml of milk you want to add:"));
    milk = (addMilk + milk);
    let addCoffeeBeans = parseInt(prompt("Write how many g of coffee beans you want to add:"));
    coffeeBeans = (addCoffeeBeans + coffeeBeans);
    let addCups = parseInt(prompt("Write how many disposable cups you want to add:"));
    cups = (addCups + cups);
}

function currentIngredients() {
    console.log("The coffee machine has:");
    console.log(water + " ml of water");
    console.log(milk + " ml of milk");
    console.log(coffeeBeans + " g of coffee beans");
    console.log(cups + " disposable cups");
    console.log(money + " of money");
}


