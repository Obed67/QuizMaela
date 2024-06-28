// Définition des données du quiz CSS
const quizData = [
  {
    question: "2. Quelle méthode JavaScript est utilisée pour afficher quelque chose dans la console ?",
    answers: {
      a: "console.print()",
      b: "console.log()",
      c: "print()",
      d: "log()"
    },
    correctAnswer: "b"
  },
  {
    question: "3. Quelle fonction JavaScript est utilisée pour arrêter l'exécution d'une boucle ?",
    answers: {
      a: "break",
      b: "exit",
      c: "return",
      d: "pause"
    },
    correctAnswer: "a"
  },
  {
    question: "4. Quelle méthode JavaScript est utilisée pour ajouter un nouvel élément HTML à une page ?",
    answers: {
      a: "appendChild()",
      b: "createTextNode()",
      c: "getElementById()",
      d: "setAttribute()"
    },
    correctAnswer: "a"
  },
  {
    question: "5. Quelle est la méthode JavaScript utilisée pour parcourir tous les éléments d'un tableau ?",
    answers: {
      a: "forEach()",
      b: "forAll()",
      c: "each()",
      d: "every()"
    },
    correctAnswer: "a"
  }
  // Ajoutez d'autres questions sur JavaScript ici
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
  const output = [];

  quizData.forEach((questionData, questionIndex) => {
    const answers = [];

    for (const option in questionData.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionIndex}" value="${option}">
          ${questionData.answers[option]}
        </label>`
      );
    }

    output.push(
      `<div class="question">${questionData.question}</div>
      <div class="answers">${answers.join('')}</div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let score = 0;

  quizData.forEach((questionData, questionIndex) => {
    const answerContainer = answerContainers[questionIndex];
    const selector = `input[name=question${questionIndex}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === questionData.correctAnswer) {
      score++;
      answerContainers[questionIndex].style.color = 'lightgreen';
    } else {
      answerContainers[questionIndex].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `Vous avez obtenu ${score} sur ${quizData.length} correctement.`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);

const nextButton = document.getElementById('next');

  submitButton.addEventListener('click', function() {
    showResults();
    nextButton.style.display = 'block';
  });

  nextButton.addEventListener('click', function() {
    window.location.href = 'quiz_js.html'; // Redirection vers la page suivante (quiz CSS ici)
  });