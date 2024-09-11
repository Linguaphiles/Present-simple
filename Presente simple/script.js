// script.js

// Función para mostrar y ocultar la respuesta de un ejercicio
function toggleAnswer(type, number) {
    const answerId = `answer-${type}-${number}`;
    const answerElement = document.getElementById(answerId);
    if (answerElement) {
        if (answerElement.style.display === 'none') {
            answerElement.style.display = 'block';
        } else {
            answerElement.style.display = 'none';
        }
    }
}

// Función para guardar la respuesta en LocalStorage
function saveAnswer(type, number) {
    const inputId = `input-${type}-${number}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        const answer = inputElement.value;
        localStorage.setItem(`${type}-${number}`, answer);
        alert('Respuesta guardada!');
    }
}

// Función para cargar la respuesta desde LocalStorage
function loadAnswer(type, number) {
    const inputId = `input-${type}-${number}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        const savedAnswer = localStorage.getItem(`${type}-${number}`);
        if (savedAnswer) {
            inputElement.value = savedAnswer;
        } else {
            alert('No hay respuesta guardada.');
        }
    }
}

// Inicializa todas las respuestas como ocultas al cargar la página
window.onload = function() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(function(answer) {
        answer.style.display = 'none';
    });
};
