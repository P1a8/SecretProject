// Data docelowa
const targetDate = new Date("2024-12-18T14:00:00").getTime();

// Pobierz elementy DOM
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const linkElement = document.getElementById("link");
const countdownElement = document.getElementById("countdown");

// Funkcja aktualizująca odliczanie
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    } else {
        // Ukryj odliczanie i pokaż link
        countdownElement.style.display = "none";
        linkElement.style.display = "block";
        clearInterval(interval);
    }
}

// Aktualizuj co sekundę
const interval = setInterval(updateCountdown, 1000);
updateCountdown();
