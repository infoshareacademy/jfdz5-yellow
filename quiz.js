/**
 * Created by magda on 11/07/17.
 */

/*
 Pierwszy krok: Budujemy strukturę gry
 1) w pliku indexQuiz.html - HTML
 2) w pliku quiz.js - JavaSript:

 function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

 function showQuestions(questions, quizContainer){
 ---- code will go here ----
 }
 function showResults(questions, quizContainer, resultsContainer){
 ---- code will go here ----
 }

 --- show the questions ---
 showQuestions (questions, quizContainer);

 --- when user clicks submit, show results
 submitButton.onclick = function(){
 showResults(questions, quizContainer, resultsContainer);
 }

 }
 */

var shuffle = function (arr) {
    for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
}


// "łapiemy" znaczniki HTML i zapisujemy odniesienia do tych elementów w zmiennych
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

/*
 Drugi krok: Pokazujemy pytania quizu
 Do quizu potrzebujemy pytań i odpowiedzi, więc musimy zbudować obiekt, po którym łatwo nam będzie iterować:
 - wszystkie pytania umieścimy w tablicy,
 - każde pojedyncze pytanie wraz z przypisanymi doń odpowiedziami i wskazaniem na odpowiedź prawidłową umieścimy w obiekcie
 */
var questions = [
    {
        question: "Z jakiej fontanny słynie Gdańsk?",
        answers: {
            a: "Wolności",
            b: "Potop",
            c: "Kryształ",
            d: "Neptun"
        },
        picture: "quiz_img/fontannaNeptun.jpg",
        correctAnswer: "d"
    },
    {
        question: "Nad jaką rzeką leży Gdańsk i jego dawny port?",
        answers: {
            a: "Wełtawą",
            b: "Wisłą",
            c: "Motławą",
            d: "Martwą Wisłą"
        },
        picture: "quiz_img/MotlawaZGory.jpg",
        correctAnswer: "c"
    },
    {
        question: "Z jakiej twierdzy kontrolowano ruch statków w dawnym porcie gdańskim?",
        answers: {
            a: "Westerplatte",
            b: "Wisłoujście",
            c: "Boyen",
            d: "Biskupia Górka"
        },
        picture: "quiz_img/twierdzaWisloujscie.jpg",
        correctAnswer: "b"
    }
];

shuffle(questions);


// rozpoczynamy budowę naszj funkcji generującej quiz

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {


// Gdy mamy już listę pytań questions, to teraz pokażemy je na stronie:

    function showQuestions(questions, quizContainer) {
        // potrzebujemy miejsca do przechowywania danych HTML
        var output = [];
        var answers;
        // dla każdego pytania...
        for (var i = 0; i < questions.length; i++) {
            // będziemy chcieli zapisać listę opcji wyboru odpowiedzi
            answers = [];

            // i dla każdej dostępnej odpowiedzi, których kolejność będzie losowana
            var keys = Object.keys(questions[i].answers);
            shuffle(keys);
            for (var j = 0; j < keys.length; j++) {
                var letter = keys[j];
                // ... dodamy radio-button HTML
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + ' '
                    + questions[i].answers[keys[j]]
                    + '</label>'
                );
            }

            // teraz dodamy konkretne pytanie i jego odpowiedzi do HTML DOM
            output.push(
                '<div class="question">'
                + questions[i].question
                + '</div>'
                + '<div class="picture">'
                + '<img src="' + questions[i].picture + '">'
                + '</div>'
                + '<div class="answers">'
                + answers.join('')
                + '</div>'
            );
        }

// ostatecznie połączymy naszą listę danych HTML w jeden ciąg HTML i umieścimy go na stronie
        quizContainer.innerHTML = output.join('');

    }

// teraz możemy uruchomić funkcję
    showQuestions(questions, quizContainer);

// Trzeci krok: Po naciśnnięciu przycisku submit - pokaż wyniki quizu

    function showResults(questions, quizContainer, resultsContainer) {

        // zapisujemy odpowiedzi z quizu do zmiennej
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // śledzimy odpowiedzi użytkowników
        var userAnswer = '';
        var numCorrect = 0;

        // dla każdego pytania ...
        for (var i = 0; i < questions.length; i++) {
            // znajdujemy zaznaczoną odpowiedź
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // jeśli odpowiedź jest poprawna
            if (userAnswer === questions[i].correctAnswer) {
                // dodaj do liczby poprawnych opowiedzi
                numCorrect++;
                // zakoloruj tę odpowiedź na zielono
                answerContainers[i].style.color = 'lightgreen';
            }
            // jeśli odpowiedź jest nieprawidłowa
            else {
                // zakoloruj tę odpowiedź na czerwono
                answerContainers[i].style.color = 'red';
            }
        }
// pokazujemy ilość poprawnych odpowiedzi w stosunku do wszystkich
        resultsContainer.innerHTML = 'Twój wynik: ' + numCorrect + ' na ' + questions.length;
    }

// po naciśnięciu przycisku submit, pokazujemy rezultaty quizu
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }

}
// a teraz generujemy nasz quiz
generateQuiz(questions, quizContainer, resultsContainer, submitButton);
