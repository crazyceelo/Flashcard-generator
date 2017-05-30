var BasicCard = require("./BasicCard.js");
var inquire = require("inquirer");

var counter = 0;
var allCards = [];
var basicArray = [];
var clozedArray = [];

function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
}

ClozeCard.prototype.partial = function(){
    this.cloze = "... "
    this.text = "was the first president of the United States."
    return this.cloze + this.text;
};

ClozeCard.prototype.fullText = function(){
    this.cloze = "George Washington"
    this.text = "was the first president of the United States."
    return this.cloze + " " + this.text;
};


var basicSet = {
    1 : firstPresident = new BasicCard("who was the first president of the United States", "George Washington"),
    2 : secondPesident = new BasicCard("who was the second president", "new guy")
}

for (var key in basicSet) {
    if (basicSet.hasOwnProperty(key)) {
        var element = basicSet[key];
        basicArray.push(element);
        // console.log(basicArray);
    }
}

// basicArray.push(firstPresident);
// basicArray.push(secondPesident);

// console.log(basicArray);


var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var secondPresidentCloze = new ClozeCard("new guy was our second president", "new guy")

// make basic an array so I can loop the function.
// make cloze an array so I can loop the function.

firstPresidentCloze.partial();
firstPresidentCloze.fullText();

var brokenCloze = new ClozeCard("this does not work", "oops");

var i = 0;
function runBasic(){
    if (basicArray.length < 3){
        inquire.prompt([
            {
                name: "name",
                message: basicArray[i].front
            }
        ]).then(function(answers){
            i++;
            console.log(i);
            if (answers.name === basicArray[i].back || answers.name === basicArray[i].back.toLowerCase()){
                console.log("correct");
                
            }
            else {
                console.log("incorrect");
            }
            runBasic();
        })
    }
}


function runCloze(){
    inquire.prompt([
        {
            name: "name",
            message: firstPresidentCloze.partial
        }
    ]).then(function(answers){
        if (answers.name === firstPresidentCloze.cloze || answers.name === firstPresidentCloze.cloze.toLowerCase()){
            console.log("correct");
        }
        else {
            console.log("incorrect");
        }
    })
}

function choose(){
    inquire.prompt([
        {
            name: "input",
            type: "confirm",
            message: "basic format? "
        }
    ]).then(function(answers){
        // console.log(answers.input);
        if (answers.input === true){
            runBasic();
        }
        else {
            runCloze();
        }
    })
}

choose();




module.exports = ClozeCard;
