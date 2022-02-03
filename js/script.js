// Question 1

function receivingFunction(check) {
    if (typeof check === "function") {
        check();
    }

}

function callbackFunction() {
    console.log("I am a callback function");
}

receivingFunction(callbackFunction);

// Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

//for (let i = 0; i < prizes.length; i++) {
//    console.log(`Prize ${i + 1}: ${prizes[i]}`);
//}
//

prizes.forEach(function (prize) {
    console.log(prize);

});

// QUestion 3

const seconds = 5;

function log() {
    console.log("I waited ${seconds} seconds before executing");
}

setTimeout(log, seconds * 1000);