const questions = [
  {
    question: "First letter of alphabet.",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false }
    ]
  },
  {
    question: "Second letter of alphabet.",
    answers: [
      { text: "Z", correct: false },
      { text: "B", correct: true },
      { text: "X", correct: false },
      { text: "D", correct: false }
    ]
  },
  {
    question: "Third letter of alphabet.",
    answers: [
      { text: "O", correct: false },
      { text: "Y", correct: false },
      { text: "C", correct: true },
      { text: "K", correct: false }
    ]
  }
]

const next = document.querySelector(".next");
const ans = document.querySelectorAll(".ans");
const questionDiv = document.querySelector(".question");
const scoreDiv = document.querySelector(".score");
const answersDiv = document.querySelector(".answers");

const ansArr = Array.from(ans);

let index = 0;
let score = 0;

const showQuestion = ()=>{
  ans.forEach((but)=>{
    but.disabled = false;
    but.className = "ans";
  })
  questionDiv.innerHTML = questions[index].question;
  let i = 0;
  ansArr.map((each)=>{
    each.innerHTML = questions[index].answers[i].text;
    i++;
  })
}

next.addEventListener('click', ()=>{
  if(index < 2){
    index++;
    showQuestion();
  } else if(index == 2){
    answersDiv.style.display = "none";
    next.innerHTML = "Play Again";
    scoreDiv.innerHTML = `Your Score is ${score}`;
    index++;
  } else{
    answersDiv.style.display = "block";
    next.innerHTML = "Next";
    scoreDiv.innerHTML = "";
    index = 0;
    score = 0;
    showQuestion();
  }
})

ans.forEach((element)=>{
  element.addEventListener('click', (e)=>{
    if(questions[index].answers[e.target.id].correct == true){
      e.target.className = "true";
      score++;
    } else{
      e.target.className = "false";
    }
    ans.forEach((but)=>{
      but.disabled = true;
    })
  })
})