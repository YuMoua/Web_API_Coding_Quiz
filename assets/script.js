// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

let timeLeft = 30;
function countDown() {
    for (let i = timeLeft; i <= 0; timeLeft--) {
        console.log(timeLeft);
    }

    return;
}
let countInterval = setInterval(countDown, 1000);
setTimeout(function() {
    clearInterval(countInterval);

}, 1000)

setInterval(countDown, 1000)

// WHEN I answer a question
// THEN I am presented with another question



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over



// WHEN the game is over
// THEN I can save my initials and my score



