function checkAnswers() {
    const q1 = document.getElementById('q1').value.toLowerCase();
    const q2 = document.getElementById('q2').value.toLowerCase();
    const q3 = document.getElementById('q3').value.toLowerCase();

    let correctAnswers = 0;

    if (q1 === "efes") correctAnswers++;
    if (q2 === "croesus") correctAnswers++;
    if (q3 === "127") correctAnswers++;

    const result = document.getElementById('result');
    result.textContent = `Ai răspuns corect la ${correctAnswers} întrebări.`;
}
