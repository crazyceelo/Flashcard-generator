var BasicCard = require("./BasicCard.js");
var inquire = require("inquirer");

var counter = 0;
var allCards = [];
var basic = [];
var clozed = [];

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

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

firstPresidentCloze.partial();
firstPresidentCloze.fullText();

var brokenCloze = new ClozeCard("this does not work", "oops");

inquire.prompt([
    {
        name: "name",
        message: firstPresident.front
    }
]).then(function(answers){
    if (answers.name === firstPresident.back || answers.name === firstPresident.back.toLowerCase()){
        console.log("correct");
    }
    else {
        console.log("incorrect");
    }
})

module.exports = ClozeCard;
