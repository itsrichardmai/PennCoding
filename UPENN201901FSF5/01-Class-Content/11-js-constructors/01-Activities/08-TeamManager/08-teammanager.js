var inquirer = require("inquirer")

class Player {
    constructor(name){
        this.name = name.toString();
        this.position = position.toString();
        this.offense = offense.parseInt();
        this.defense = defense.parseInt();
        }
    goodGame() {
        var coinFlip = Math.floor(Math.random() * 1);
        console.log(coinFlip);
        if (coinFlip === 0) {
            this.offense += 1;
        }
        if (coinFlip === 1) {
            this.defense += 1
            }
        }
    badGame() {
        var coinFlip = Math.floor(Math.random() * 1);
        console.log(coinFlip);
        if (coinFlip === 0) {
            this.offense -= 1;
            }
        if (coinFlip === 1) {
            this.defense -= 1;
            }
        }
    }

inquirer.prompt([
    { 
    name: "name",
    message: "What is your name?", 
    type: "input",
    validate: function(value) {
        if(value.length < 3) {
            return 'Name must be atleast 3 characters long.'
            }
        }
    },

    { 
    name: "position",
    message: "What is your favorite role?", 
    choices: ["Marksman, Rogue, Warrior, Magician"],
    },
    
])