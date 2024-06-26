function gradeQuiz() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const answers = {
        q1: "5",
        q2: "7/4",
        // Add all answers here...
        q25: "e^x + C"
    };
    let score = 0;
    let total = 25;

    for (let [question, answer] of formData.entries()) {
        if (answer.trim().toLowerCase() === answers[question].toLowerCase()) {
            score++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = `You scored ${score} out of ${total}`;
}
