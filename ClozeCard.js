var BasicCard = require("./BasicCard.js");
var inquire = require("inquirer");


function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
}

ClozeCard.prototype.partial = function(){
    this.cloze = "... "
    this.text = "was the first president of the United States."
    console.log(this.cloze + this.text);
};

ClozeCard.prototype.fullText = function(){
    this.cloze = "George Washington"
    this.text = "was the first president of the United States."
    console.log(this.cloze + " " + this.text);
};



var firstPresident = new BasicCard("who was the first president of the United States", "George Washington");

// "who was the first president of the United States"
console.log(firstPresident.front);

// "goerge washington"
console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze);
firstPresidentCloze.partial();
firstPresidentCloze.fullText();

var brokenCloze = new ClozeCard("this does not work", "oops");
console.log(brokenCloze.text + ", " + brokenCloze.cloze);


module.exports = ClozeCard;

inquire.prompt([
    {
        type: "input",
        name: "test",
        message: "message test", 
        choices: ["a", "b", "c"]
    }
])