let timerInterval;

function startTimer() {
    clearInterval(timerInterval); // Oldinqi taymerni to'xtatish
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    let totalTime = minutes * 60 + seconds; // Umumiy vaqtni hisoblash

    const timerDisplay = document.getElementById('timerDisplay');

    timerInterval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Vaqt tugadi!";
            document.getElementById('alarm').play(); // Vaqt tugaganda audio o'ynatish
            return;
        }

        totalTime--;

        const min = Math.floor(totalTime / 60);
        const sec = totalTime % 60;
        timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    }, 1000);
}