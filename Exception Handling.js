const readlineSync = require('readline-sync');

let animals = [];
let fees = [];

function addAnimal(name, fee) {
    if (!name || fee < 0) {
        throw new Error("Invalid animal name or adoption fee.");
    }
    animals.push(name);
    fees.push(fee);
}

function getAdoptionFee(animalName) {
    let index = animals.indexOf(animalName);
    if (index === -1) {
        throw new Error("Animal not found, please try again.");
    }
    return fees[index];
}


console.log("Welcome to the Cool Awesome Pet Shelter System.");
while (true) {
    let action = readlineSync.question("Choose an action ('add', 'fee', or 'exit'): ").toLowerCase();
    if (action === "exit") {
        console.log("Goodbye!");
        break;
    } else if (action === "add") {
        let animal = readlineSync.question("Please enter the animal's name: ");
        let fee = Number(readlineSync.question("Please also enter the adoption fee: "));
        if (!animal) {
            console.log("Animal name cannot be blank.");
        }
        if (isNaN(fee) || fee < 0) {
            console.log("Please enter a valid number for the fee.");
        }
        try {
            addAnimal(animal, fee);
            console.log(`Your ${animal} has been added for ${fee} monies.`);
        } catch (err) {
            console.log(err.message);
        }
    } else if (action === "fee") {
        let animal = readlineSync.question("Please enter the animal's name to find its adoption fee: ");
        try {
            let fee = getAdoptionFee(animal);
            console.log(`${animal}'s adoption fee is ${fee} monies.`);
        } catch (err) {
            console.log(err.message);
        }
    } else {
        console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
    }
}