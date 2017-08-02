/**
 * Created by magda on 11/07/17.
 */

var shuffle = function (arr) {
    for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
};
var quizContainer = document.getElementById('gm-quiz');
var resultsContainer = document.getElementById('gm-results');
var submitButton = document.getElementById('gm-submit');
var rankingButton = document.getElementById('gm-ranking');
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
        question: "Ruch statków w dawnym porcie gdańskim kontrolowano z twierdzy ...",
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
        question: "Najważniejsze cykliczne wydarzenie w Gdańsku to ...",
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
        question: "W dniach 1-7 września 1939 roku dostępu do Gdańska broniono pod ...",
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
        question: "Średniowieczny dźwig portowy z bramą wodną nazywany jest ...",
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
        question: "Park słynący z bogatych iluminacji bożonarodzeniowych to ...",
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
        question: "Gdańskie osiedle o planie urbanistycznym na kształt plastrów miodu to ...",
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
        question: "Najdłuższe budynki mieszkalne na gdańskim Przymorzu to ...",
        answers: {
            a: "łamańce",
            b: "liniowce",
            c: "falowce",
            d: "wężowce"
        },
        picture: "quiz_img/FalowiecObroncowWybrzeza.jpg",
        correctAnswer: "c"
    },
    {
        question: "Stadion Energa Gdańsk to stadion klubowy ... ?",
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
        question: "Pomnik na Placu Solidarności nieopodal Bramy nr2 Stoczni Gdańskiej to ...",
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
        question: "Gdański teatr z otwieranym dachem to ...",
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
        question: "Nowoczesny budynek muzealny przy ul. Wałowej jest siedzibą ...",
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
        question: "Nowoczesne centrum na terenie Młodego Miasta Gdańska to ...",
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
        var next = document.getElementById('gm-next');
        var start = document.getElementById('gm-start-button');
        var closeButton = document.getElementById('game-close');
        var currentSlide = 0;
        var timerInterval;
        var countDownStartDate;
        var slides;
        $('#gm-submit').hide();

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
                '<ul class="gm-slides">'
                + '<li class = "gm-slide">'
                + '<div class="gm-question">'
                + questions[i].question
                + '</div>'
                + '<div class="gm-picture">'
                + '<img src="' + questions[i].picture + '">'
                + '</div>'
                + '<div class="gm-answers">'
                + answers.join('')
                + '</div>'
                + '</li>'
                + '</ul>'
            );
        }
        quizContainer.innerHTML = output.join('');

        function returnStartDate() {
            countDownStartDate = ( new Date().getTime() ) + 8 * 1000;
        }

        start.onclick = function () {
            console.log('kliknieto na start');
            returnStartDate();
        };
        closeButton.onclick = function () {
            console.log('kliknieto close button');
            clearInterval(timerInterval);
        };

        function nextSlide() {
            currentSlide += 1;
            console.log('jestesmy na slajdzie ' + currentSlide);
            goToSlide(currentSlide);
        }

        next.onclick = function () {
            nextSlide();
        };


        function goToSlide(n) {
            slides[currentSlide - 1].className = 'gm-slide';
            slides[currentSlide].className = 'gm-slide gm-showing';
            countDownStartDate = ( new Date().getTime() ) + 8 * 1000;
            intervalClear();
            if (currentSlide !== slides.length - 1) {
                timer();
                timerInterval = setInterval(timer, 100);
            }
            else {
                timerLastQuestion();
                timerInterval = setInterval(timerLastQuestion, 100);
                console.log('ostatni slajd');
            }
        }

        timerInterval = setInterval(timer, 100);

        function intervalClear(countDownStartDate) {
            $('#gm-timer').removeClass('gm-red');
            $('#gm-notice').removeClass('gm-red');
            clearInterval(timerInterval);
        }

        function timer() {
            var now = new Date().getTime();
            var distance = countDownStartDate - now;
            var seconds = Math.floor(distance / 1000);
            if (distance >= 5 * 1000) {
                $('#gm-timer').text(seconds);
                $('#gm-notice').text('time is running');
            }
            else if (distance < 0) {
                clearInterval(timerInterval);
                $('#gm-timer').text('EXPIRED !!!');
                $('#gm-notice').text('EXPIRED !!!');
                nextSlide();
            }
            else {
                $('#gm-timer').text(seconds).addClass('gm-red');
                $('#gm-notice').text('HURRY UP !!!').addClass('gm-red');
            }
        }

        function timerLastQuestion() {
            var now = new Date().getTime();
            var distance = countDownStartDate - now;
            var seconds = Math.floor(distance / 1000);
            $('.gm-buttons').hide();
            if (distance >= 5 * 1000) {
                $('#gm-timer').text(seconds);
                $('#gm-notice').text('time is running');
            }
            else if (distance < 0) {
                clearInterval(timerInterval);
                $('#gm-timer').removeClass('gm-red');
                $('#gm-notice').removeClass('gm-red');
                $('#gm-timer').text('Koniec czasu !!!');
                $('#gm-notice').text('Dziękujemy za grę');
                $('#gm-submit').show();
                slides[currentSlide].className = 'gm-slide';
                $('#gm-quiz').hide();
            }
            else {
                $('#gm-timer').text(seconds).addClass('gm-red');
                $('#gm-notice').text('HURRY UP !!!').addClass('gm-red');
            }
        }

        slides = document.querySelectorAll('.gm-slides .gm-slide');
        if (currentSlide == 0) {
            slides[currentSlide].className = 'gm-slide gm-showing';
        }
    }

    showQuestions(questions, quizContainer);


    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.gm-answers');
        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {
            // znajdujemy zaznaczoną odpowiedź
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // jeśli odpowiedź jest poprawna
            if (userAnswer === questions[i].correctAnswer) {
                // dodaj do liczby poprawnych opowiedzi
                numCorrect++;
            }
        }
        // pokazujemy ilość poprawnych odpowiedzi w stosunku do wszystkich
        resultsContainer.innerHTML = 'Twój wynik: ' + numCorrect + ' na ' + questions.length;

        var return_results = [];
       return_results[0] = numCorrect;
       return_results[1] = questions.length;
       saveResults(return_results);
    }

    // po naciśnięciu przycisku submit, pokazujemy rezultaty quizu
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}

// a teraz generujemy nasz quiz
generateQuiz(questions, quizContainer, resultsContainer, submitButton);

// teraz skupiamy się na zapisaniu wyników do local storage oraz wygenerowaniu rankingu
function saveResults(result) {

    var results = getResults();

    // wyciągamy datę i godzinę, w których zostały zapisane wyniki rozgrywki do lokalstorage
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var seconds = dateObj.getSeconds();
    var minutes = dateObj.getMinutes();
    var hour = dateObj.getHours();

    // ostateczny wygląd daty i godziny rozgrywki
    var newDate = year + "/" + month + "/" + day + " " + hour + ":" + minutes + ":" + seconds;


    result.unshift(newDate); // do zapisywanego wyniku rozgrywki wstawiamy na początek tablicy newDate

    results.unshift(result); // do tablicy wyników wstawiamy na początek wynik ostatniej rozgrywki - result


    // jeżeli do tablicy ma być zapisany czwarty element, to zostaje wyrzucona z niej ostatnia pozycja
    // tablica z wynikami ma zawierać trzy ostatnie wyniki rozgrywek
    if (results.length >= 7) {
        results.pop();
    }
    // zapisujemy wyniki do lokalstorage
    localStorage.results = JSON.stringify(results);
}

function getResults() {
    var results;

    if (!localStorage.results) {
        results = [];
    } else {
        results = JSON.parse(localStorage.results);
    }
    return results;
}

// po naciśnięciu przycisku, pokazujemy ranking quizu
  rankingButton.onclick = function () {

    var ranking = getResults();

    var line = "";

    for  (var k = 0; k < ranking.length; k++) {
        line += ranking[k][0] +"  "+ranking[k][1] + "  "+ranking[k][2]+"<br/>";
    }
    document.getElementById("gm-localstorage").innerHTML = line;
};

