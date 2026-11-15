// quiz.js - the True or False quiz on the Start Playing page

// the right answers for question 1, 2 and 3
var answers = ["false", "true", "false"];

// what to say after each question
var reasons = [
  "Beginners are welcome! Everyone starts somewhere.",
  "The inside of your foot is big and flat, so the ball goes where you aim.",
  "You can share balls, cones and bibs. Ask what school can give you."
];

var score = 0;

function check(number, choice) {
  var feedback = document.getElementById("feedback" + number);

  // stop people answering the same question twice
  if (feedback.textContent != "") {
    return;
  }

  if (choice == answers[number - 1]) {
    feedback.textContent = "✔ Correct! " + reasons[number - 1];
    feedback.className = "feedback right";
    score = score + 1;
  } else {
    feedback.textContent = "✘ Not quite. " + reasons[number - 1];
    feedback.className = "feedback wrong";
  }

  document.getElementById("score").textContent = "Score: " + score + " out of 3";
}

// Retry button: clear everything and start again
function retry() {
  for (var i = 1; i <= 3; i++) {
    var feedback = document.getElementById("feedback" + i);
    feedback.textContent = "";
    feedback.className = "feedback";
  }
  score = 0;
  document.getElementById("score").textContent = "Score: 0 out of 3";
}
