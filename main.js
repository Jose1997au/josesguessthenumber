$(document).ready(function() {
    $(".currentAnswer").text(`${currentAnswer}`);
});

const difference = 7

let currentAnswer = Math.floor(Math.random() * 101);

function absolute(num) {
    let absolute;
    if (num > 0) {
        absolute = num;
    } else if (num < 0) {
        absolute = -num;
    } else {
        absolute = 0;
    }
    return absolute;
}

function evaluateGuess() {
    let clientGuess = parseInt($(".clientGuess").val());

    if (isNaN(clientGuess)) {
        $(".result").text(`Please input a proper number.`);
        return;
    }

    if (clientGuess > 100) {
        $(".result").text(`Guess higher than 100, input a new guess.`);
        return
    } else if (clientGuess < 0) {
        $(".result").text(`Guess lower than 0, input a new guess.`);
        return
    }

    if (absolute(clientGuess - currentAnswer) <= difference && clientGuess != currentAnswer) {
        $(".result").text(`Your guess was close, try again!`);
        return;
    } 

    if (clientGuess == currentAnswer) {
        $(".result").text(`You got it! The answer was ${currentAnswer}.`);
    } else if (clientGuess < currentAnswer) {
        $(".result").text(`Your guess was too low.`);
    } else {
        $(".result").text(`Your guess was too high.`);
    }
}

let visible = false

function toggleHideAnswer() {
    let blurredDiv = document.querySelector(".blur");
    let button = $(".revealButton")
    if (visible) {
        blurredDiv.style.filter = "blur(5px)"
        button.text(`Reveal Answer`)
        visible = false
    } else {
        blurredDiv.style.filter = "none"
        button.text(`Hide Answer`)
        visible = true
    }
}

function refreshCurrentAnswer() {
    currentAnswer = Math.floor(Math.random() * 101);
    $(".currentAnswer").text(`${currentAnswer}`);
    $(".result").text(`Result shows here.`);
    visible = true
    toggleHideAnswer();
}

console.log("hello world");