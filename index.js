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

while (true) {

let option = prompt("Write action (buy, fill, take, remaining, exit):");

if (option == "buy") {
    let buy = prompt("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
    if (buy == 1) {
      if (water < 250) {
         cosole.log("Sorry, not enough water!");
         continue;
      }
      if (coffeeBeans < 16) {
            console.log("Sorry, not enough coffee beans!");
            continue;
      }
      if (cups < 1) {
            console.log("Sorry, not enough coffee!");
            continue;
      }   
       water = water - 250;
       coffeeBeans = coffeeBeans - 16;
       money = money + 4;
       cups = cups - 1;
       console.log("I have enough resources, making you a coffee!");
       
    }  else if (buy == 2)   {
          if (water < 350) {
           console.log("Sorry, not enough water!");
           continue;
          }
          if (coffeeBeans < 20) {
          console.log("Sorry, not enough coffee beans!");
          continue;      
          }
          if (milk < 75) {
          console.log("Sorry, not enough milk!")      
          }
          water = water - 350;
          milk = milk - 75;
          coffeeBeans = coffeeBeans - 20;
          money = money + 7;
          cups = cups - 1;
          console.log("I have enough resources, making you a coffee!");
          
    } else if (buy == 3) {
          if(water < 200) {
          console.log("Sorry, not enough water!");
          continue;      
          }
          if (milk < 100) {
          console.log("Sorry, not enough milk!");
          continue;      
          }
          if (coffeeBeans < 12) {
          console.log("Sorry, not enough coffee!");
          continue;      
          }
          water = water - 200;
          milk = milk - 100;
          coffeeBeans = coffeeBeans - 12;
          money = money + 6;
          cups = cups - 1;
          console.log("I have enough resources, making you a coffee!");
          
    } else if (buy == "back") {
          continue;
    }
} else if (option == "fill") {
    addIngredients();   
    continue;
} else if (option == "take") {
    console.log("I gave you $" + money);
    money = 0; 
    continue;
} else if(option == "joke") {
    joke();
    continue;
} else if (option == "remaining") {
    currentIngredients();
    continue;
} else if (option == "exit") {
    break;
}
}

function addIngredients() {
    let addWater = parseInt(prompt("Write how many ml of water you want to add:"));
    water = (addWater + water);
    let addMilk = parseInt(prompt("Write how many ml of milk you want to add:"));
    milk = (addMilk + milk);
    let addCoffeeBeans = parseInt(prompt("Write how many g of coffe beans you want to add:"));
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
    console.log("$" + money + " of money");
    
}

function joke() {
  let name = prompt("What is the perfect name for a sofisticated Coffee Machine");
    if (name == "Soffee") {
        console.log("How the hell did you find it?");
        console.log("");
        console.log("Are you a wizard?");
        console.log("");
    } else {
        console.log("No");
        console.log("");
        console.log("Its Soffee");
        console.log("");
        console.log("Its from the combination of sofisticated and coffee");
        console.log("");
        console.log("hehe");
        console.log("");
    }
    
  let like = prompt("Did you like my joke?");
    if (like == "yes" || like == "Yes") {
        console.log("Damn I'm good!!!");
        console.log("");
    } else if (like == "no" || like == "No") {
        console.log("And what exactly did you expect?");
        console.log("");
        console.log("I'm not the Joker");
        console.log("");
        console.log("I'm just a coffee machine");
        console.log("");
        console.log("Anyways");
        console.log("");
        console.log("Leave now because other clients are watting");
        console.log("");
        console.log("You are not the center of the world");
        console.log("");
        console.log("NEEEEEEEXT");
    } else {
        let likeplease = prompt(`Answer the question with a yes or no please\nJEEEESUS!!!`);
        if (likeplease == "yes" || likeplease == "Yes") {
        console.log("Damn I'm good!!!");
        console.log("");
    } else if (likeplease == "no" || likeplease == "No") {
        console.log("And what exactly did you expect?");
        console.log("");
        console.log("I'm not the Joker");
        console.log("");
        console.log("I'm just a coffee machine");
        console.log("");
        console.log("Anyways");
        console.log("");
        console.log("Leave now because other clients are watting");
        console.log("");
        console.log("You are not the center of the world");
        console.log("");
        console.log("NEEEEEEEXT");
    } else {
        console.log("Ok... you are an Idiot...");
        console.log("");
        console.log("The coffee won't heal your Idiocity");
        console.log("");   
        console.log("Leave now...");
        console.log("");    
        console.log("NEEEEEEEXT");
    }
  }
}  


