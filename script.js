let nextPageElement;

function startQuiz() {
    window.location.href = 'page1.html';
}

function checkAnswer() {
    nextPageElement = document.getElementById("nextPage").textContent;
    
    const quizForm = document.getElementById("quizForm");
    const selectedAnswer = getSelectedAnswer(quizForm);

    const correctAnswer = quizForm.dataset.correctAnswer;

    if (selectedAnswer === correctAnswer) {
        alert("Correct answer! Move to the next question.");
        if (nextPageElement == "9") {
            window.location.href = 'finalPage.html';
        } else {
            window.location.href = `page${nextPageElement}.html` ;
        }
    } else {
        alert("Incorrect answer. Try again!");
        // You may choose to handle incorrect answers differently
    }
    
}

function getSelectedAnswer(form) {
    const selectedOption = form.querySelector('input[name="group1"]:checked');
    return selectedOption ? selectedOption.value : null;
}

