function getChecked(radioGroupName) {
  const checkedRadio = document.querySelector(
    'input[name="' + radioGroupName + '"]:checked'
  );

  if (checkedRadio) {
    return checkedRadio.value;
  }
}
let myScor = "";
const amountOfQuestions = 10;
const answeredCorrectly = 0;
let score = document.getElementById("core");

function showScore() {
  if (amountOfQuestions === answeredCorrectly) {
    score.innerHTML = myScor;
  }
}

function answered(questionAnswered) {
  const valueOfChecked = getChecked(questionAnswered);

  const result = document.querySelector(`#${questionAnswered} .demo`);

  if (valueOfChecked === "correct") {
    myScor = answeredCorrectly + 10;
    console.log(myScor);
    result.innerHTML = "correct answer! You got 10 points";
    result.style.background = " #8cbf3f";
    // score.innerHTML = myScor;
    document
      .querySelectorAll(`#${questionAnswered} input`)
      .forEach(function (element) {
        element.disabled = true;
      });

    showScore();
  } else {
    result.innerHTML = "wrong answer";
    result.style.background = " red";
    result.style.color = " black";
  }
}

let div = document.getElementById("demo");
let input = document.querySelectorAll("input[name]");
// console.log(input);
// console.log(div);
// console.log(input[0]);

// function ValidateForm() {
//   if (input[0].checked == true) {
//     div.innerHTML = "correct answer! You got 10 points";
//     div.style.background = " #8cbf3f";

//     return true;
//   } else {
//     div.innerHTML = "wrong answer";
//     div.style.background = " red";
//     div.style.color = " black";
//     return false;
//   }
//   //   if ((ErrorText = "")) {
//   //     form.submit();
//   //   }
// }
