// Credit: Sanne van Tongelen @ https://codepen.io/savant/pen/gbaveO
// Code adjusted and added functions, to create an interactive game for user with quiz functions

// default variables
const quiz = []; // empty quiz array, which will take a quiz option from below
// Quiz questions, first question, right answer, wrong answer, wrong answer
quiz[0] = new Question("What job did Walter have before becoming a kingpin?", "Chemistry Teacher", "Shoe Polisher", "arms dealer");
quiz[1] = new Question("What colour did the Crystal Meth have, when Walter started producing it?", "Blue", "White", "Yellow");
quiz[2] = new Question("Who played the role of Theodore Beneke...", "Christopher Cousins", "R.J. Mitte", "Charles Baker");
quiz[3] = new Question("How many episodes did each season roughly have?", "13", "10", "8");
quiz[4] = new Question("In which season(s) did Tuco appear?", "1 & 2", "3", "All seasons");
quiz[5] = new Question("Who did Betsy Brandt portray", "Marie Schrader", "Lydia Rodarte-Quayle", "Jane Margolis");
quiz[6] = new Question("Huell Babineaux, did he get arrested?", "Yes", "No", "Don't know");
quiz[7] = new Question("Who played the role of Emilio Koyama...", "John Koyama", "Dean Norris", "I wouldn't have a clue...");
quiz[8] = new Question("Beneke Fabricators, what did they make?", "Paper products", "Accounting firm", "Toilet seats");
quiz[9] = new Question("A1A carwash, was it recorded in a real business?", "Yes", "No", "It was fake all together");
quiz[10] = new Question("Los Pollos Hermanos, was it real?", "No", "Yes", "Don't know");
quiz[11] = new Question("Los Pollos Hermanos, what business is in there now?", "Twisters Restaurant", "Mc D's", "Burger King");
quiz[12] = new Question("Did Badger get in trouble with the DEA?", "Yes", "No", "He went to jail");
quiz[13] = new Question("Was El Camino a follow-up movie?", "Yes", "No", "Hmmm...");
quiz[14] = new Question("How many seasons does Better Call Saul have?", "five, sixt coming up", "Three", "Seven");
quiz[15] = new Question("Where was Tuco's headquarters?", "Java Joe's", "Near a dump", "Tuco had no headqtr");
quiz[16] = new Question("To’hajiilee Reservation, does it exist", "Yes, first it was named: Canoncito Reserv.", "No", "Yes");
quiz[17] = new Question("Was the To’hajiilee Reservation the first place where the meth lab was seen in?", "Yes", "No", "It was first seen at Jesse's place");
quiz[18] = new Question("When did Jesse's parents decide to sell Jesse's house?", "Season two", "Season one", "It was not sold");
quiz[19] = new Question("Delta Linen, is it a real business?", "Yes", "No", "It is a filming location");
quiz[20] = new Question("What did Bogdan Wolynetz do?", "Owner of a business", "Worked at Walts school", "Jobless");
quiz[21] = new Question("Skinny Pete, did he wear a cap?", "No, a beanie", "No cap", "Don't know Skinny");
quiz[22] = new Question("When did Gale Boetticher make an appearance?", "Season Three", "Season Two", "Season Five");
quiz[23] = new Question("Did Gale Boetticher, die a vilent death?", "Yes", "No", "He left ABQ");
quiz[24] = new Question("Did Gale Boetticher, also make great meth?", "Yes", "No", "Did he make meth?");
quiz[25] = new Question("Gustavo Fring, was he a ...", "Cartel-Leader", "Mexican", "Chicken owner");
quiz[26] = new Question("Did Brandon Mayhew get in trouble with the DEA?", "Yes", "No", "He went to jail");
quiz[27] = new Question("Ken's Nickname?", "Ken Wins", "Ken who?", "Ken looser");
let randomQuestion;
let answers = [];
let currentScore = 0; // start current score at 0, which will increase to 10
let difficulty;

document.addEventListener("DOMContentLoaded", difficultyLevel);

function Question(question, rightAnswer, wrongAnswer1, wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};

function shuffle(o) {
    for (let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function difficultyLevel() {
    document.getElementById("looseEndGame").innerHTML = `<!-- Start game, first time code insert -->
    <div class="row">
        <div class="col-12 mb-2">
            <p>Want to know how to play? Select the button below to read up about the functions
                of the game...</p>
        </div>
        <div class="col-12 mb-2"><button type="button" class="btn btn-warning"
                data-bs-toggle="modal" data-bs-target="#modalRules">
                How to play...
            </button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="modalRules" tabindex="-1" aria-labelledby="gameRulesModal"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="gameRulesModal">Rules of the game...</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>First, you need to select a difficulty.</p>
                        <p>Difficulty levels are as followed:</p>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Eror rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Easy</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Medium</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Hard</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>The error rate, is the amount of deductions per wrong question, you
                            start at "0", and each correct question, you get "1" point.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btnLightDarkstyle"
                            data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <p>Select difficulty Level:</p>
        </div>
        <div class="col-12 mb-2"><button class="btn btnLightDarkstyle"
                onclick="easyLevel()">Easy</button>
        </div>
        <div class="col-12 mb-2"><button class="btn btnLightDarkstyle"
                onclick="mediumLevel()">Medium</button></div>
        <div class="col-12 mb-2"><button class="btn btnLightDarkstyle"
                onclick="hardLevel()">Hard</button>
        </div>
    </div>
    <!-- End first time game code input -->`;
}

function easyLevel() {
    difficulty = 1;
    document.getElementById("looseEndGame").innerHTML = `                            <!-- Score comes here -->
    <div class="row">
        <div class="col-12">
            <h4>Your score: <span id="score">0</span></h4>
        </div>
    </div>
    <!-- Score End -->
    <!-- Question / Answer here -->
    <div class="row">
        <div class="col-12 col-md-6">
            <h4 id="question">Question comes here</h4>
        </div>
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-12 pb-2"><button class="btn btnLightDarkstyle" id="answerA"
                        onclick="answerA_clicked()">Answer #1</button>
                </div>
                <div class="col-12 pb-2"><button class="btn btnLightDarkstyle id=" answerB"
                        onclick="answerB_clicked()">Answer #2</button>
                </div>
                <div class="col-12 pb-2"><button class="btn btnLightDarkstyle" id="answerC"
                        onclick="answerC_clicked()">Answer #3</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Question / Answer here end -->
    <!-- Right / Wrong answer here -->
    <div class=" row">
        <div class="col-12">
            <p id="correctOrNotValue">Right / wrong comes here</p>
        </div>
    </div>
    <!-- Right / Wrong answer end here -->`;
    btnProvideQuestion();
}

function mediumLevel() {
    difficulty = 2;
    document.getElementById("looseEndGame").innerHTML = `                            <!-- Score comes here -->
    <div class="row">
        <div class="col-12">
            <h4>Your score: <span id="score">0</span></h4>
        </div>
    </div>
    <!-- Score End -->
    <!-- Question / Answer here -->
    <div class="row">
        <div class="col-12 col-md-6">
            <h4 id="question">Question comes here</h4>
        </div>
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-12 pb-2"><button class="btn btnLightDarkstyle" id="answerA"
                        onclick="answerA_clicked()">Answer #1</button>
                </div>
                <div class="col-12 pb-2"><button class="btn btnLightDarkstyle id=" answerB"
                        onclick="answerB_clicked()">Answer #2</button>
                </div>
                <div class="col-12 pb-2"><button class="btn btnLightDarkstyle" id="answerC"
                        onclick="answerC_clicked()">Answer #3</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Question / Answer here end -->
    <!-- Right / Wrong answer here -->
    <div class=" row">
        <div class="col-12">
            <p id="correctOrNotValue">Right / wrong comes here</p>
        </div>
    </div>
    <!-- Right / Wrong answer end here -->`;
    btnProvideQuestion();
}

function hardLevel() {
    difficulty = 3;
    document.getElementById("looseEndGame").innerHTML = `                            <!-- Score comes here -->
    <div class="row">
        <div class="col-12">
            <h4>Your score: <span id="score">0</span></h4>
        </div>
    </div>
    <!-- Score End -->
    <!-- Question / Answer here -->
    <div class="row">
        <div class="col-12 col-md-6">
            <h4 id="question">Question comes here</h4>
        </div>
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-12 pb-2"><button class="btn btnLightDarkstyle" id="answerA"
                        onclick="answerA_clicked()">Answer #1</button>
                </div>
                <div class="col-12 pb-2"><button class="btn btnLightDarkstyle id=" answerB"
                        onclick="answerB_clicked()">Answer #2</button>
                </div>
                <div class="col-12 pb-2"><button class="btn btnLightDarkstyle" id="answerC"
                        onclick="answerC_clicked()">Answer #3</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Question / Answer here end -->
    <!-- Right / Wrong answer here -->
    <div class=" row">
        <div class="col-12">
            <p id="correctOrNotValue">Right / wrong comes here</p>
        </div>
    </div>
    <!-- Right / Wrong answer end here -->`;
    btnProvideQuestion();
}

function btnProvideQuestion() {

    const randomNumber = Math.floor(Math.random() * quiz.length);
    randomQuestion = quiz[randomNumber]; //getQuestion
    answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
    shuffle(answers);

    document.getElementById("question").innerHTML = randomQuestion.question;
    document.getElementById("answerA").value = answers[0];
    document.getElementById("answerA").innerHTML = answers[0];
    document.getElementById("answerB").value = answers[1];
    document.getElementById("answerB").innerHTML = answers[1];
    document.getElementById("answerC").value = answers[2];
    document.getElementById("answerC").innerHTML = answers[2];

}

function answerA_clicked() {
    const answerA = document.getElementById("answerA").value;
    checkAnswer(answerA);
}

function answerB_clicked() {
    const answerB = document.getElementById("answerB").value;
    checkAnswer(answerB);
}

function answerC_clicked() {
    const answerC = document.getElementById("answerC").value;
    checkAnswer(answerC);
}

function adjustScore(isCorrect) {
    debugger;
    if (isCorrect) {
        currentScore++;
    } else {
        if (currentScore > 0) {
            currentScore -= difficulty;
            console.log(currentScore);
        }
    }
    document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {
    if (answer == randomQuestion.rightAnswer) {
        adjustScore(true);
        btnProvideQuestion();
        document.getElementById("correctOrNotValue").innerHTML = "Wrong Answer";

        if (currentScore === 10) {
            document.getElementById("looseEndGame").innerHTML = `<h1>You have Won!</h1> <br> <button class="btn btnDarkstyle" onclick="init()">Play Again</button>`;
        }
    } else {
        adjustScore(false);
        document.getElementById("correctOrNotValue").innerHTML = "Right Answer";

        if (currentScore === 0 || currentScore < 0) {
            document.getElementById("looseEndGame").innerHTML = `<h1>You have lost!</h1> <br> <button class="btn btnDarkstyle" onclick="init()">Play Again</button>`;
        }
    }
}