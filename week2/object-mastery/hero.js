const superhero = {
    name: 'Spider-Man',
    secretIdentity: 'Peter Parker',
    powers: ['Flight', 'Invisibility','web-slinging', 'Super strength'],
    weakness: 'Physical Vulnerabilities',

    usePower(powerName){
        console.log(`${this.name} used his ${this.powers[2]}, ability to swiftly navigate through the cityevading enemy fire and rescuing civilians from a collapsing building. `)
    },
    revealIdentity(){
        console.log(`${this.name}'s secret identity is ${this.secretIdentity}, a freelance photographer.`)
    },
}
function Superhero(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
}

Superhero.prototype.describe = function() {
    console.log(`${this.name}, also known as ${this.secretIdentity}, has the following powers: ${this.powers.join(', ')}`);
};

Superhero.prototype.primaryPower = function() {
    return `${this.secretIdentity}'s primary power is: ${this.powers[0]}`;
};

Superhero.prototype.usePower = function(powerIndex) {
    if (this.powers[powerIndex]) {
        console.log(`${this.name} used their power: ${this.powers[powerIndex]}!`);
    } else {
        console.log(`${this.name} doesn't have that power.`);
    }
};

Superhero.prototype.revealIdentity = function() {
    console.log(`${this.name}'s secret identity is ${this.secretIdentity}`);
};

const superhero1 = new Superhero('Clark Kent', 'Superman', ['Super strength', 'Flying', 'Heat vision'], 'Overexertion');
const superhero2 = new Superhero('Bruce Wayne', 'Batman', ['Martial arts', 'Intelligence', 'Gadgetry'], 'Physical Injury');
const superhero3 = new Superhero('Peter Parker', 'Spider-Man', ['Wall crawling', 'Web shooting', 'Super agility'], 'Emotional Strain');


const superheroes = [superhero1, superhero2, superhero3];
superheroes.forEach(hero => hero.describe());

const primaryPowers = superheroes.map(hero => hero.primaryPower());
console.log(primaryPowers);

function superheroBattle(hero1, hero2) {
    const hero1Strength = hero1.powers.length;  
    const hero2Strength = hero2.powers.length;

    console.log(`Battle between ${hero1.secretIdentity} and ${hero2.secretIdentity}!`);

    if (hero1Strength > hero2Strength) {
        console.log(`${hero1.secretIdentity} wins!`);
    } else if (hero1Strength < hero2Strength) {
        console.log(`${hero2.secretIdentity} wins!`);
    } else {
        console.log("It's a tie!");
    }
}
superhero.usePower();
superhero.revealIdentity();
superheroBattle(superhero1, superhero2);
superheroBattle(superhero2, superhero3);

superhero1.usePower(1); 
superhero2.usePower(2);
superhero3.revealIdentity(); 
