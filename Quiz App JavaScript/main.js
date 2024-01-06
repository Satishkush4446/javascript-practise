const questions = [
  {
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
  },
  {
    'que': 'What is the capital of India?',
    'a': 'Beijing',
    'b': 'Seoul',
    'c': 'New Delhi',
    'd': 'Bangkok',
    'correct': 'c'
  },
  {
    'que': 'Which planet is known as the Red Planet?',
    'a': 'Mars',
    'b': 'Venus',
    'c': 'Jupiter',
    'd': 'Saturn',
    'correct': 'a'
  },
  {
    'que': 'Which programming language is used for building web applications?',
    'a': 'Java',
    'b': 'Python',
    'c': 'Ruby',
    'd': 'JavaScript',
    'correct': 'd'
  },
  {
    'que': 'Which of the following is a front-end framework/library?',
    'a': 'Node.js',
    'b': 'React',
    'c': 'Express',
    'd': 'Django',
    'correct': 'b'
  }
];


let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
  if(index === total){
    return endQuiz(); 
  }
  reset()
  const data = questions[index]
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer()
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;

}
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach(
    (input) => {
      input.checked = false;
    }
  )

}
const endQuiz = () => {
  document.getElementById("box").innerHTML = `<h3>Thank you for playing The Quiz</h3>
  <h2>${right}/ ${total} are correct</h2>`;
};

loadQuestion();