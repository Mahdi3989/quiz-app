const quizData = [{
    question: "How is old florin",
    a: '10',
    b: '24',
    c: '23',
    d: '43',
    correct: 'b'
},
{
    question: "what is the most used programming language in 2019",
    a: 'java',
    b: 'C',
    c: 'Python',
    d: 'javaScript',
    correct: 'd'
},
{
    question: "who is the president of Us?",
    a: 'florin pop',
    b: 'Donald Trump',
    c: 'Ivan Solano',
    d: 'Mihad andri',
    correct: 'b'
},
{
    question: "what does html stand for?",
    a: 'HyperText Markup Language',
    b: 'Cascading style sheet',
    c: 'json object notation',
    d: 'application programming Interface',
    correct: 'a'
},
{
    question: "what year was javaScript lauched?",
    a: '2020',
    b: '2019',
    c: '2018',
    d: 'None of the above',
    correct: 'd'
},
]
let quiz = document.getElementById('quiz')
let currentQuestion = 0;
const text_a = document.getElementById('text_a');
const text_b = document.getElementById('text_b')
const text_c = document.getElementById('text_c')
const text_d = document.getElementById('text_d')
const submitBtn = document.getElementById('submitBtn')
const answersEl = document.querySelectorAll('.answer')
const quiz_question = document.getElementById('quiz-question')
let answer = undefined;
loadquiz();
let score = 0;
function loadquiz() {
    deselected();
    let currentquizData = quizData[currentQuestion]
    quiz_question.innerHTML = currentquizData.question;
    text_a.innerHTML = currentquizData.a;
    text_b.innerHTML = currentquizData.b;
    text_c.innerHTML = currentquizData.c;
    text_d.innerHTML = currentquizData.d;

}
function deselected() {
    answersEl.forEach(function (answerEl) {
        answerEl.checked = false;

    })
}
function getSelected() {
    answersEl.forEach(function (answerEl) {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer;
}
submitBtn.addEventListener('click', function () {
    getSelected();
    if (answer) {
        if (answer == quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++
        if (currentQuestion < quizData.length) {
            answer = undefined;
            loadquiz();
        } else {
            quiz.innerHTML = `
                <h2>
                You answered to ${score}/${quizData.length} questions.
                </h2>
                <button style="padding:10px;margin-top:8px" onclick="location.reload()">Reload</button>
            `
        }
    }
})
