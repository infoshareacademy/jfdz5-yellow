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
};

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
    },
    {
        question: "Najważniejsze cykliczne wydarzenie w Gdańsku to:",
        answers: {
            a: "Jarmark Dominikański",
            b: "Festiwal Tańca",
            c: "Projekt Heweliusz",
            d: "Festiwal Goldbergowski"
        },
        picture: "quiz_img/JarmarkDominikanski.jpg",
        correctAnswer: "a"
    },
    {
        question: "W dniach 1-7 września 1939 roku dostępu do Gdańska broniono pod:",
        answers: {
            a: "Oliwą",
            b: "Kępą Oksywską",
            c: "Westerplatte",
            d: "Ossą"
        },
        picture: "quiz_img/Westerplatte.jpg",
        correctAnswer: "c"
    },
    {
        question: "Średniowieczny dźwig portowy z bramą wodną Gdańska zlokalizowany nad Motławą to:",
        answers: {
            a: "Czapla",
            b: "Żuraw",
            c: "Bocian",
            d: "Katownia"
        },
        picture: "quiz_img/ZurawNadMotlawa.jpg",
        correctAnswer: "b"
    },
    {
        question: "Park gdański słynący między innymi z bogatych iluminacji bożonarodzeniowych to:",
        answers: {
            a: "Park Akademicki",
            b: "Park Kuźniczki",
            c: "Park Uphagena",
            d: "Park Oliwski"
        },
        picture: "quiz_img/IluminacjeSwiateczneParkOliwski.jpg",
        correctAnswer: "d"
    },
    {
        question: "Gdańskie osiedle o planie urbanistycznym na kształt plastrów miodu to:",
        answers: {
            a: "Zaspa",
            b: "Przymorze",
            c: "Suchanino",
            d: "Wrzeszcz"
        },
        picture: "quiz_img/ZaspaPlastryMiodu.jpg",
        correctAnswer: "a"
    },
    {
        question: "Jaką nazwą określane są najdłuższe budynki mieszkalne w Polsce i w Gdańsku?",
        answers: {
            a: "łamańce",
            b: "liniowce",
            c: "falowce",
            d: "wężownice"
        },
        picture: "quiz_img/FalowiecObroncowWybrzeza.jpg",
        correctAnswer: "c"
    },
    {
        question: "Stadion Energa Gdańsk to stadion klubowy ...?:",
        answers: {
            a: "Lechii",
            b: "Arki",
            c: "Trefla",
            d: "Bałtyku"
        },
        picture: "quiz_img/GdanskArena.jpg",
        correctAnswer: "a"
    },
    {
        question: "Jaki pomnik stoi na Placu Solidarności nieopodal Bramy nr2 Stoczni Gdańskiej?:",
        answers: {
            a: "Pomnik Tym, którzy nie wrócili z morza",
            b: "Pomnik Polskiego Państwa Podziemnego",
            c: "Pomnik Poległych Stoczniowców 1970",
            d: "Pomnik Obrońców Poczty Polskiej"
        },
        picture: "quiz_img/PomnikStoczniowcow.jpg",
        correctAnswer: "c"
    },
    {
        question: "Gdański teatr z otwieranym dachem, warty odwiedzenia ze względu na spektakle i architekturę to:",
        answers: {
            a: "Teatr Muzyczny",
            b: "Teatr Wybrzeże",
            c: "Teatr Miniatura",
            d: "Teatr Szekspirowski"
        },
        picture: "quiz_img/TeatrSzekspirowski.jpg",
        correctAnswer: "d"
    },
    {
        question: "Nowoczesny budynek muzealny, przy ul. Wałowej, na terenie historycznej Wiadrowni jest siedzibą:",
        answers: {
            a: "Muzeum Narodowego",
            b: "Muzeum II Wojny Światowej",
            c: "Muzeum Bursztynu",
            d: "Muzeum Poczty Polskiej"
        },
        picture: "quiz_img/MuzeumIIWojnySwiatowej.jpg",
        correctAnswer: "b"
    },
    {
        question: "Centrum prowadzące działalność edukacyjną, naukową, wydawniczą oraz wystawienniczą na terenie Młodego Miasta Gdańska to:",
        answers: {
            a: "Europejskie Centrum Solidarności",
            b: "Olivia Business Centre",
            c: "Centrum Sztuki Współczesnej Łaźnia",
            d: "Nadbałtyckie Centrum Kultury"
        },
        picture: "quiz_img/EuropejskieCentrumSolidarnosci.jpg",
        correctAnswer: "a"
    },
    {
        question: "Jak nazywa się główny rynek Gdańska?",
        answers: {
            a: "Pchli Targ",
            b: "Zielony Rynek",
            c: "Renk",
            d: "Długi Targ"
        },
        picture: "quiz_img/DlugiTarg.jpg",
        correctAnswer: "d"
    },

];

shuffle(questions);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;
        var next = document.getElementById('next');
        var previous = document.getElementById('previous');
        var currentSlide = 0;

        for (var i = 0; i < questions.length; i++) {
            answers = [];
            var keys = Object.keys(questions[i].answers);
            shuffle(keys);
            for (var j = 0; j < keys.length; j++) {
                var letter = keys[j];
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + ' '
                    + questions[i].answers[keys[j]]
                    + '</label>'
                );
            }
            output.push(
                '<ul id="slides">'
                +'<li class = "slide">'
                +'<div class="question">'
                + questions[i].question
                + '</div>'
                + '<div class="picture">'
                + '<img src="' + questions[i].picture + '">'
                + '</div>'
                + '<div class="answers">'
                + answers.join('')
                + '</div>'
                + '</li>'
                + '</ul>'
            );
        }
        quizContainer.innerHTML = output.join('');

        next.onclick = function() {
            if (currentSlide == (slides.length - 1)){
                console.log('Tutaj');
            } else {
                nextSlide();
            }
        };
        previous.onclick = function() {
            if (currentSlide == 0){
                console.log('Tutaj');
            } else {
                previousSlide();
            }
        };
        function nextSlide() {
            goToSlide(currentSlide+1);
        }
        function previousSlide() {
            goToSlide(currentSlide-1);
        }
        function goToSlide(n) {
            slides[currentSlide].className = 'slide';
            currentSlide = (n+slides.length)%slides.length;
            slides[currentSlide].className = 'slide showing';
            clearInterval(timer);
            clock();

            // tu jest warunek, który trzeba poprawić na 1==1, który trzeba połączyć z timerem dla całej gry, aby slajdy znikły po zakończonym czasie odliczania
            // ?? do usuniecia ???

            if (1 == 2) {
                slides[currentSlide].className = 'slide';
            }
        }
        var countDownStartDate = ( new Date().getTime() ) + 8 * 1000;
        var timer = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownStartDate - now;
            var seconds = Math.floor(distance / 1000);
            if (distance >= 5 * 1000) {
                $('#timer').text(seconds);
                $('#notice').text('time is running');
            }
            else if (distance < 0) {
                clearInterval(timer);
                $('#timer').text('EXPIRED !!!');
                $('#notice').text('EXPIRED !!!');
                nextSlide();
            }
            else {
                $('#timer').text(seconds).addClass('red');
                $('#notice').text('HURRY UP !!!').addClass('red');
            }
            console.log("zegart tyka " + distance);
        }, 100);

        function clock (timer, countDownStartDate) {
            $('#timer').removeClass('red');
            $('#notice').removeClass('red');

        }




        /*
        function clock () {
            $('#timer').removeClass('red');
            $('#notice').removeClass('red');
            var countDownStartDate = ( new Date().getTime() ) + 8 * 1000;
            var timer = setInterval(function () {
                var now = new Date().getTime();
                var distance = countDownStartDate - now;
                var seconds = Math.floor(distance / 1000);
                if (distance >= 5 * 1000) {
                    $('#timer').text(seconds);
                    $('#notice').text('time is running');
                }
                else if (distance < 0) {
                    clearInterval(timer);
                    $('#timer').text('EXPIRED !!!');
                    $('#notice').text('EXPIRED !!!');
                    nextSlide();
                }
                else {
                    $('#timer').text(seconds).addClass('red');
                    $('#notice').text('HURRY UP !!!').addClass('red');
                }
                console.log("zegart tyka " + distance);
            }, 100);
        };
*/
        var slides = document.querySelectorAll('#slides .slide');

        if (currentSlide == 0){
            slides[currentSlide].className = 'slide showing';


        }

        // tu jest warunek, który trzeba poprawić na 1==1, który trzeba połączyć z timerem dla całej gry, aby slajdy znikły po zakończonym czasie odliczania
        // ?? o co chodzi ???
        if (1 == 2) {
            slides[currentSlide].className = 'slide';
        }

    }


    showQuestions(questions, quizContainer);



    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;

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
