var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: noise()
}

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: noise()
}

function noise() {
    // this will console log woof
    if ((this).raining === true && (this).noise === "Woof!") {
        console.log((this).noise)
    } 
    // console log meow
    else if ((this).raining === true && (this).noise === "Meow!") {
        console.log((this).noise)
    }
}



