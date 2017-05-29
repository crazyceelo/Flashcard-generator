var BasicCard = require("./BasicCard.js");
var inquire = require("inquirer");


function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
}

var washington = new BasicCard();
washington.front = "question 1";
washington.back = "answer 1";

console.log(washington.front);
console.log(washington.back);

module.exports = ClozeCard;