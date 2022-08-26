var num = 0;

var question = document.querySelector(".question");

var allAnswers = document.querySelectorAll(".answer");
var answer1 = document.querySelector(".answer-1");
var answer2 = document.querySelector(".answer-2");
var answer3 = document.querySelector(".answer-3");
var answer4 = document.querySelector(".answer-4");

var numberOfQuestion = document.querySelectorAll(".numberOfQuestion");

var maxnumberOfQuestion = document.querySelector(".maxnumberOfQuestion");

var nextButton = document.querySelector(".nextButton");

var questions = [
  {
    id: 1,

    question: "What does HTML stand for?",

    ans1: "Hypertext Meta-Language",
    ans2: "Hit The Mother Load",
    correct: "HyperText Markup Language",
    ans4: "Hyper creative Language",
  },
  {
    id: 2,

    question: "Which is the correct CSS syntax?",

    correct: "body{color:black}",
    ans2: "{body{color:black}",
    ans3: "body={color:black}",
    ans4: "body:color{black}",
  },
  {
    id: 3,

    question: "What does CSS stand for",

    ans1: "Computering Style Sheet",
    ans2: "Creative Style System",
    ans3: "Creative Styling Sheet",
    correct: "Cascading Style Sheet",
  },
  {
    id: 4,

    question: "Which answer is correct about JavaScript",

    correct: "All of the answers",
    ans2: "JavaScript is a lightweight, interpreted programing language",
    ans3: "JavaScript is designed for creating network-centric applications",
    ans4: "Javascript is complementary to and intergrated with Java",
  },
];

nextButton.addEventListener("click", function () {
  num++;
  answer1.classList.remove("wrong", "correct");
  answer2.classList.remove("wrong", "correct");
  answer3.classList.remove("wrong", "correct");
  answer4.classList.remove("wrong", "correct");

  numberOfQuestion[0].innerText = questions[num].id + ".";
  numberOfQuestion[1].innerText = questions[num].id;
  question.innerText = questions[num].question;

  if (num === 0) {
    answer1.innerText = questions[0].ans1;
    answer2.innerText = questions[0].ans2;
    answer3.innerText = questions[0].correct;
    answer4.innerText = questions[0].ans4;
  }

  if (num === 1) {
    answer1.innerText = questions[num].correct;
    answer2.innerText = questions[num].ans2;
    answer3.innerText = questions[num].ans1;
    answer4.innerText = questions[num].ans4;
  }

  if (num === 2) {
    answer1.innerText = questions[num].ans1;
    answer2.innerText = questions[num].ans2;
    answer3.innerText = questions[num].ans3;
    answer4.innerText = questions[num].correct;
  }
  if (num === 3) {
    answer1.innerText = questions[num].correct;
    answer2.innerText = questions[num].ans2;
    answer3.innerText = questions[num].ans3;
    answer4.innerText = questions[num].ans4;
  }
  if (num === 3) {
    num = -1;
  }
});

maxnumberOfQuestion.innerHTML = questions.length;

numberOfQuestion[0].innerText = questions[0].id + ".";
numberOfQuestion[1].innerText = questions[0].id;
question.innerText = questions[0].question;
answer1.innerText = questions[0].ans1;
answer2.innerText = questions[0].ans2;
answer3.innerText = questions[0].correct;
answer4.innerText = questions[0].ans4;


for (var e = 0; e < allAnswers.length; e++) {
  allAnswers[e].addEventListener("click", function () {
    if (num === 0) {
      if (this.classList.contains("answer-3")) {
        this.classList.add("correct");
      }
      if (!answer3.classList.contains("correct")) {
        this.classList.add("wrong");
        answer3.classList.add("correct");
        answer2.classList.add("wrong");
        answer1.classList.add("wrong");
        answer4.classList.add("wrong");
      }
    }
    if (num === 1) {
      if (this.classList.contains("answer-1")) {
        this.classList.add("correct");
      }
      if (!answer1.classList.contains("correct")) {
        this.classList.add("wrong");
        answer3.classList.add("wrong");
        answer2.classList.add("wrong");
        answer1.classList.add("correct");
        answer4.classList.add("wrong");
      }
    }
    if (num === 2) {
      if (this.classList.contains("answer-4")) {
        this.classList.add("correct");
      }
      if (!answer4.classList.contains("correct")) {
        this.classList.add("wrong");
        answer3.classList.add("wrong");
        answer2.classList.add("wrong");
        answer1.classList.add("wrong");
        answer4.classList.add("correct");
      }
    }
    if (num === -1) {
      if (this.classList.contains("answer-1")) {
        this.classList.add("correct");
      }
      if (!answer1.classList.contains("correct")) {
        this.classList.add("wrong");
        answer3.classList.add("wrong");
        answer2.classList.add("wrong");
        answer1.classList.add("correct");
        answer4.classList.add("wrong");
      }
    }
  });
}

