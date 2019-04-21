class Character {
    constructor(name) {
        this.name = name;
        this.profession = profession.toString();
        this.gender = gender.toString();
        this.age = age.parseFloat();
        this.strength = strength.parseFloat();
        this.hp = hitPoints.parseFloat();
    }

}  

const ant = new Character('Ant');

console.log(ant.name);


