obj1 = {
  question: "Jaavascript is a ____________  language. ",
  answer: ["Coding", "Scripting", "programming", "none of these"],
  correctAns: "Scripting",
};
obj2 = {
  question: "HTML stands for _________________________",
  answer: ["hyper text machine language", "machinne language","hypertext markup language","none of these"],
  correctAns: "hypertext markup language",
};
obj3 = {
  question: "Is JavaScript and Java same _______________________",
  answer: ["True", "False"],
  correctAns: "True",
};
obj4 = {
  question: "In HTML hover tag is _________________________",
  answer: ["Inline", "Block level", "Pseudo", "None of these"],
  correctAns: "Pseudo",
};
obj5 = {
  question: "for loop start with _________________________",
  answer: ["initialize,increment", "decrement,condition", "initialize,condition,incre/decre", "None of these"],
  correctAns: "initialize,condition,incre/decre",
};
obj6 = {
  question: "How can we check the last index of an char _________________________",
  answer: ["charAt", "IndexOf", "lastIndexOf", "None of these"],
  correctAns: "lastIndexOf",
};
var arr = [obj1, obj2, obj3, obj4, obj5, obj6];
var question = document.getElementById("question");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionQuantity = document.getElementById("totalQuestionQuantity");
var optionsParent = document.getElementById("optionsParent");
var resultParent = document.getElementById("resultParent");
var resultText = document.getElementById("resultText");
var ind = 0;
var score = 0;

function displayQuestion() {
  optionsParent.innerHTML = "";
  question.innerHTML = arr[ind].question;
  currentQuestionNumber.innerHTML = ind + 1;
  totalQuestionQuantity.innerHTML = arr.length;
  for (var i = 0; i < arr[ind].answer.length; i++) {
    optionsParent.innerHTML += `<div class="col-md-6 py-3">
    <button onclick="checkAnswer('${arr[ind].answer[i]}')" class="btn px-5  rounded-pill btn-light">${arr[ind].answer[i]}</button>
</div>`;
  }
}
displayQuestion();

function checkAnswer(e) {
  var userAnswer = e;
  if (userAnswer == arr[ind].correctAns) {
    score++;
  }
  if (ind + 1 == arr.length) {
    displayResult();
  } else {
    ind++;
    displayQuestion();
  }
}

function displayResult() {
  resultParent.style.display = "block";
  optionsParent.style.display = "none";
  question.style.display = "none";
  var result = "Your Score is " + score + " out of " + arr.length + "  " +`<i class="fas fa-trophy"></i>`
  resultText.innerHTML = result
}
