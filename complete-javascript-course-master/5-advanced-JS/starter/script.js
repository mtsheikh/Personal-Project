(function() {
  var Question = function(question, answers, correctAnswer) {
    (this.question = question),
      (this.answers = answers),
      (this.correctAnswer = correctAnswer);
  };

  var first = new Question(
    "Is JavaScript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );

  var second = new Question(
    "What is the name of this courses's teacher?",
    ["John", "Michael", "Jonas"],
    2
  );

  var third = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tedious"],
    2
  );

  var questionArray = [first, second, third];

  var result =
    userAnswer == questionArray[questionIndex].correctAnswer
      ? "Correct Answer"
      : "Wrong Answer";
  console.log(result);

  function chcekAnswer(userAnswer, correctAnswer) {
    var result =
      userAnswer == correctAnswer ? "Correct Answer" : "Wrong Answer";
    console.log(result);
  }

  function displayResult(array, fn) {
    var questionIndex = Math.round(
      Math.random() * (questionArray.length - 1),
      0
    );

    console.log(array[questionIndex].question);
    for (var index = 0; index < array[questionIndex].answers.length; index++) {
      console.log(index + ": " + array[questionIndex].answers[index]);
    }

    var userAnswer = prompt(
      "Please select the correct answer (Just type the number)."
    );
  }
})();

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//       arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
