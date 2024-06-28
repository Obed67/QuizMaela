// Définition des données du quiz CSS
const quizData = [
    {
        question: "1. Que signifie CSS en anglais ?",
        answers: {
          a: "Cascading Style Sheets",
          b: "Cascaded Style Sheets",
          c: "Cascading Style Syntax",
          d: "Cascaded Style Syntax"
        },
        correctAnswer: "a"
      },
      {
        question: "2. Quel sélecteur CSS est utilisé pour sélectionner des éléments avec une classe spécifique ?",
        answers: {
          a: ".class {}",
          b: "#id {}",
          c: "element {}",
          d: "* {}"
        },
        correctAnswer: "a"
      },
      {
        question: "3. Quel sélecteur CSS est utilisé pour sélectionner un élément par son ID ?",
        answers: {
          a: ".class {}",
          b: "#id {}",
          c: "element {}",
          d: "* {}"
        },
        correctAnswer: "b"
      },
      {
        question: "4. Quelle est la propriété CSS utilisée pour définir la couleur du texte ?",
        answers: {
          a: "color",
          b: "font-color",
          c: "text-color",
          d: "foreground-color"
        },
        correctAnswer: "a"
      },
      {
        question: "5. Quelle propriété CSS est utilisée pour changer l'arrière-plan d'un élément ?",
        answers: {
          a: "background-color",
          b: "background-image",
          c: "background-style",
          d: "background"
        },
        correctAnswer: "a"
      },
      {
        question: "6. Quel attribut CSS est utilisé pour définir l'espacement entre les éléments intérieurs d'une boîte et ses bords ?",
        answers: {
          a: "margin",
          b: "padding",
          c: "spacing",
          d: "border-spacing"
        },
        correctAnswer: "b"
      },
      {
        question: "7. Vous souhaitez centrer un élément div horizontalement et verticalement dans une page web. Quelle propriété CSS devez-vous utiliser ?",
        answers: {
          a: "transform: translate(-50%, -50%);",
          b: "text-align: center; vertical-align: middle;",
          c: "margin: auto; display: flex; align-items: center; justify-content: center;",
          d: "padding: 50% 50%;"
        },
        correctAnswer: "c"
      },
      {
        question: "8. Vous souhaitez appliquer un style CSS uniquement pour les écrans ayant une résolution inférieure à 600 pixels. Quelle est la meilleure approche ?",
        answers: {
          a: "@media screen and (max-width: 600px) { /* styles ici */ }",
          b: "@media screen (max-width <= 600px) { /* styles ici */ }",
          c: "@media (max-width: 600px) { /* styles ici */ }",
          d: "@media only screen and (max-width <= 600px) { /* styles ici */ }"
        },
        correctAnswer: "a"
      },
      {
        question: "9. Vous souhaitez appliquer un fond d'écran qui se répète verticalement sur une page web. Quelle propriété CSS utilisez-vous ?",
        answers: {
          a: "background-repeat: vertical;",
          b: "background-image: repeat-y;",
          c: "background-size: cover;",
          d: "background-position: center;"
        },
        correctAnswer: "b"
      },
      {
        question: "10. Vous avez une liste d'éléments <div> à aligner côte à côte horizontalement sans espace entre eux. Quelle propriété CSS utilisez-vous ?",
        answers: {
          a: "float: left;",
          b: "display: inline-block;",
          c: "flex-direction: row;",
          d: "grid-template-columns: auto;"
        },
        correctAnswer: "a"
      },
      {
        question: "11. Vous souhaitez que le texte d'un élément <p> soit en italique. Quelle est la manière correcte d'appliquer le style ?",
        answers: {
          a: "text-style: italic;",
          b: "font-style: italic;",
          c: "text-decoration: italic;",
          d: "style: italic;"
        },
        correctAnswer: "b"
      }
      // Vous pouvez ajouter plus de questions sur le CSS ici
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