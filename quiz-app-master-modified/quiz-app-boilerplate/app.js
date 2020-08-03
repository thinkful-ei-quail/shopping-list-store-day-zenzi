/**
 * Example store structure
 */
'use strict';
//MY ANSWER KEY
const store = {
  // 5 or more questions are required
  questions: [
    {
      name: 'How do you create an alert box?',
      answers: [
        'msgBox(“Correct!”)',
        'alertBox(“Correct!”)',
        'alert(“Correct!”)',
        'msg.write(“Correct!’)'
      ],
      correctAnswer: 'alert(“Correct!”)'
    },
    {
      name: 'How do you call a function in Javascript?',
      answers: [
        'call.myFunction()',
        'myFunction()',
        'call myFunction()',
        'callFunction=myFunction()'
      ],
      correctAnswer: 'myFunction()'
    },
    {
      name: 'Inside what element do we place JavaScript?',
      answers: [
        '&lt;scripting&gt;',
        '&lt;js&gt;',
        '&lt;javascript&gt;',
        '&lt;script&gt;'
      ],
      correctAnswer: '&lt;script&gt;'
    },
    {
      name: 'How do you write an IF statement?',
      answers: [
        'if i = 7',
        'if (i == 7)',
        'if i ==7 then',
        'if i = 7 then'
      ],
      correctAnswer: 'if (i == 7)'
    },
    {
      name: 'How do you create a function?',
      answers: [
        'function: myFunction()',
        'function = myFunction()',
        'function myFunction()',
        'myFunction <= function'
      ],
      correctAnswer: 'function myFunction()'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  selectedAnswer: ""
};
function render() {

let formFormat = "";
  let question = store.questions[store.questionNumber];
  console.log(question);
  let currentQuestionNum = store.questionNumber + 1;
  
  let numCorrect = store.score;
  let numWrong = store.questionNumber - store.score;
  
  // alert(currentQuestionNum);
  
  if(currentQuestionNum == 6){
  formFormat =
    `<h1>Summary</h1>
    <p>Correct: ${numCorrect}</p> 
    <p>Incorrect: ${numWrong}</p>`
  }else{
  
  
  formFormat =
    `<form class="question">
      <h3>${question.name}</h3>
      <button type="button" class="blockbutton">${question.answers[0]}</button>
      <button type="button" class="blockbutton">${question.answers[1]}</button>
      <button type="button" class="blockbutton">${question.answers[2]}</button>
      <button type="button" class="blockbutton">${question.answers[3]}</button>
      <div style="text-align: center;">
      <input id="answerSubmit" type="submit" value="submit">
      </div>
    </form>
    <footer>
        <p>Question ${currentQuestionNum} OUT OF 5</p>
        <p>Correct: ${numCorrect} Incorrect: ${numWrong}</p>
      </footer>`;
      }

  $("main").html(formFormat);
}

function showStartPage() {
  let startPage =
    `<h2> Start my quiz here.</h2>
<button type="button" class="start-btn">Start</button>
`;
  $('main').html(startPage);
}

$("main").on("click", ".start-btn", function () {
  render();
})

$("main").on("click", ".blockbutton", function (event) {

// alert(this);

$(".blockbutton").css("background-color","#AEA4BF");
$(this).css("background-color","#ff00ff");
$("#answerSubmit").css("display","block");


// alert("button works: " + $(event.target).html());

  console.log($(event.target).html());
  store.selectedAnswer = $(event.target).html();
  
  
  
})

$("main").on("submit", ".question", function (event) {

  event.preventDefault();
  
  let question = store.questions[store.questionNumber];
  
  console.log(store.selectedAnswer, question.correctAnswer);
  
  if (store.selectedAnswer == question.correctAnswer) {
    store.score = store.score + 1;
    alert("YAY");
  } else {
    alert("Nope!");
  }
  
  store.questionNumber = store.questionNumber + 1;
  render();
})

$(showStartPage)


/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)






