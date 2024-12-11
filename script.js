// Data docelowa
const targetDate = new Date("2024-12-18T14:00:00").getTime();

// Elementy na stronie
const countdownElement = document.getElementById("countdown");
const linkElement = document.getElementById("link");

// Funkcja aktualizująca odliczanie
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.innerText = `${days} dni ${hours} godz. ${minutes} min ${seconds} sek`;
    } else {
        countdownElement.style.display = "none";
        linkElement.style.display = "block";
        clearInterval(interval);
    }
}

// Aktualizuj co sekundę
const interval = setInterval(updateCountdown, 1000);
updateCountdown();
