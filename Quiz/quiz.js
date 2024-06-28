const quizData = [
  {
    question: "1. Que signifie HTML en anglais ?",
    answers: {
      a: "Hyper Text Markup Language",
      b: "Hyperlinks and Text Markup Language",
      c: "Home Tool Markup Language",
      d: "Hyper Text Makeup Language"
    },
    correctAnswer: "a"
  },
  {
    question: "2. Quelle est la différence entre les attributs 'id' et 'class' en HTML/CSS ?",
    answers: {
      a: "'id' est unique dans un document, tandis que 'class' peut être appliqué à plusieurs éléments.",
      b: "'id' est utilisé pour les styles CSS, tandis que 'class' est utilisé pour identifier des sections de texte.",
      c: "'id' est utilisé pour encapsuler des balises, tandis que 'class' est utilisé pour structurer les divs.",
      d: "'id' est utilisé pour créer des liens hypertexte, tandis que 'class' est utilisé pour lier des images."
    },
    correctAnswer: "a"
  },
  {
    question: "3. Quelle est la signification de l'attribut HTML 'data-' ?",
    answers: {
      a: "Il est utilisé pour spécifier des données de format dans les tableaux HTML.",
      b: "Il est utilisé pour stocker des données personnalisées privées ou propriétaires pour l'application.",
      c: "Il est utilisé pour encoder des images et des médias dans les pages web.",
      d: "Il est utilisé pour ajouter des annotations spéciales aux éléments HTML."
    },
    correctAnswer: "b"
  },
  {
    question: "4. Quelle est la différence entre les méthodes HTTP GET et POST ?",
    answers: {
      a: "GET est utilisé pour envoyer des données sensibles, tandis que POST est utilisé pour des données non sensibles.",
      b: "GET est utilisé pour des requêtes sans effet secondaire, tandis que POST est utilisé pour des requêtes avec effet secondaire.",
      c: "GET est utilisé pour les formulaires HTML, tandis que POST est utilisé pour les balises de lien.",
      d: "GET est utilisé pour la navigation entre les pages, tandis que POST est utilisé pour la récupération de données."
    },
    correctAnswer: "b"
  },
  {
    question: "5. Quel attribut est utilisé pour fournir un texte d'avis sur un élément ou son contenu ?",
    answers: {
      a: "title",
      b: "alt",
      c: "advisory",
      d: "hint"
    },
    correctAnswer: "a"
  }
  // Ajoutez d'autres questions selon le même format
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');

// Vérifier si les réponses ont déjà été soumises
if (localStorage.getItem('quizSubmitted')) {
  disableQuiz();
}

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
  nextButton.style.display = 'block'; // Afficher le bouton pour la page suivante
  submitButton.disabled = true; // Désactiver le bouton Soumettre
  disableQuiz(); // Désactiver tous les boutons radio
  localStorage.setItem('quizSubmitted', true); // Marquer le quiz comme soumis dans localStorage
}

function disableQuiz() {
  const radios = quizContainer.querySelectorAll('input[type=radio]');
  radios.forEach(radio => {
    radio.disabled = true;
  });
}

buildQuiz();

submitButton.addEventListener('click', function() {
  showResults();
});

nextButton.addEventListener('click', function() {
  window.location.href = 'quiz_css.html'; // Redirection vers la page suivante (quiz CSS ici)
});
