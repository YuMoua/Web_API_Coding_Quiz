let startContainerEl = document.getElementById('startContainer')
let timerEl = document.getElementById('timer');
let startButtonEl = document.getElementById('startButton');
let quizContainerEl = document.getElementById('quizContainer');
let questionAndAnswerBlockEl = document.getElementById('questionAndAnswerBlock');
let questionEl = document.getElementById('question');
let choiceContainerEl = document.getElementById('choiceContainer');

let totalScore = 0;
let timeLeft = 30;
let questionAmount = 3;

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

startButtonEl.addEventListener('click', function () {
    timerEl.textContent = timeLeft + ' Seconds Remaining';
    startButtonEl.remove();
    correctOrWrong.textContent = '';
    firstQuestion();
});


startButtonEl.addEventListener('click', function () {

    let timeInterval = setInterval(function () {
        if (timeLeft !== 0) {
            timeLeft--;
            // setTimerText();

        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
            return;
        }
    }, 1000);

    timerEl = timeLeft;
    return timerEl;
});

startButtonEl.addEventListener('click', nextQuestion());



function displayMessage() {
    let message = 'Time is up!!!';

    if (timerEl === 0) {
        questionEl = message

    };
    return questionEl;
};


// WHEN I answer a question
// THEN I am presented with another question
function firstQuestion() {
    choiceContainerEl.appendChild(div)

};
function nextQuestion() {

};


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// if (choiceButtonEl === 0) {
//     totalScore--;
// };


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

if (questionAmount === 0) {

    startButtonEl.textContent = '';
    correctOrWrong.textContent = '';
    // choiceContainer.removeChild(choiceButtonEl); //Need to find a way to remove choice buttons
    // questionEl.textContent = 'You have scored: ' + totalScore;

};

if (timeLeft === 0) {
    startButtonEl.textContent = '';
    correctOrWrong.textContent = '';
    choiceButtonEl.remove();
    questionEl.textContent = 'You have scored: ' + totalScore;
};


// WHEN the game is over
// THEN I can save my initials and my score



