let rootEl = $('#root');
let startContainerEl = document.getElementById('startContainer');
let timerEl = document.getElementById('timer');
let startButtonEl = document.getElementById('startButton');
let quizContainerEl = document.getElementById('quizContainer');
let questionAndAnswerBlockEl = document.getElementById('questionAndAnswerBlock');
let choiceContainerEl = document.getElementById('choiceContainer');
let choiceButtonEl = document.getElementById('choiceButton');
let buttonChoiceClassEl = document.getElementById('buttonChoiceClass');
let passOrFailEl = document.getElementById('passOrFail');

let correctOrWrongEl = document.getElementById('correctOrWrong');

let timeLeft = 10;

let testScore = 1;

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question




function startGame() {
    timerEl.textContent = timeLeft + ' Seconds Remaining';
    timerInterval = setInterval(clockTicker, 1000);
    
    toDoQuestions = testQuestions();
    
};

function clockTicker() {
    timeLeft--;
    timerEl.textContent = timeLeft + ' Seconds Remaining';
    if (timeLeft <= -1) {
        gameEnd();
        
    };
};




// WHEN I answer a question
// THEN I am presented with another question

function testQuestions() {
    // questionEl.textContent = 'What code do you use to attach an id or class to a variable?';
    
    let questionContent = ['Python', 'Banasplit', 'CSS', 'Javascript'];
    for (let content of questionContent) {
        let newButton = document.createElement('button');
        newButton.textContent = content;
        choiceContainerEl.appendChild(newButton);
    };
    
    
    let questionEl = document.getElementById('question');
    
    questionEl.textContent = 'What is not a programming language?';
    
    $('button').addClass('buttonChoiceClass choiceButton');
    let correctAnswer = document.getElementById('choiceContainer').querySelectorAll('.choiceButton')[1];
    correctAnswer.classList.add('correct');
    
    let wrongAnswer1 = document.getElementById('choiceContainer').querySelectorAll('.choiceButton')[0];
    wrongAnswer1.classList.add('wrong');
    
    let wrongAnswer2 = document.getElementById('choiceContainer').querySelectorAll('.choiceButton')[2];
    wrongAnswer2.classList.add('wrong');
    
    let wrongAnswer3 = document.getElementById('choiceContainer').querySelectorAll('.choiceButton')[3];
    wrongAnswer3.classList.add('wrong');

};



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

function gameEnd() {
    clearInterval(timerInterval);
    if (testScore === 0) {
        questionAndAnswerBlockEl.remove();
        timerEl.textContent = 'Time Is Up!!!';
        // let failEl = document.querySelector('fail');
        passOrFailEl.textContent = 'You Have Failed!!!';
        correctOrWrongEl.textContent = '...Because I need to code the buttons...'
    } if (testScore >= 1) {
        questionAndAnswerBlockEl.remove();
        timerEl.textContent = '';
        // let passEl = document.querySelector('pass');
        passOrFailEl.textContent = 'You Have Passed!!!';
        correctOrWrongEl.textContent = '...Because I need to code the buttons...'
    };
    
    
    // Set up functions to end game
};



// WHEN the game is over
// THEN I can save my initials and my score



startButtonEl.addEventListener('click', function () {
    startButtonEl.remove();
    startGame();
});

// let wrongButtonEl = document.querySelectorAll('wrong');
// let correctButtonEl = document.querySelectorAll('correct');

// function correctAnswerClicked() {
//     testScore++;
//     console.log(testScore);
//     gameEnd();
// };


// correctButtonEl.addEventListener = ('click', correctAnswerClicked());

// function wrongAnswerClicked() {
//     testScore--;
//     console.log(testScore);
//     gameEnd();
// };

// wrongButtonEl.addEventListener = ('click', wrongAnswerClicked());
