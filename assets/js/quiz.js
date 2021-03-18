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