class DigitalPal {
        constructor(name) {
            this.name = name.toString();
            this.hungry = false;
            this.sleepy = false;
            this.bored = true;
            this.age = 0
        };
    feed() {
        if (this.hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
            return
        }
        else if (this.hungry === false) {
            console.log("No thanks! I'm full.");
        }
        else {
            console.log("error");
        }
    }
    sleep() {
        if (this.sleepy === true) {
            console.log("Zzzzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        }
        if (this.sleepy === false) {
            console.log("No way! I'm not tired!");
        }
    }
    play() {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false; 
            this.hungry = true;
        }
        if (this.bored === false) {
            console.log("Not right now. Later?");
        }
    }
    increaseAge() {
        this.age += 1;
        console.log("Happy Birthday to me! " + "I am " + this.age + " years old!");
    }
    
}

