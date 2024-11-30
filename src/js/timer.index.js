const RegisterDate = new Date("December 1, 2024 00:00:00").getTime();
const StartDate = new Date("December 13, 2024 00:00:00").getTime();
const EndDate = new Date("December 15, 2024 00:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = Date.now();
    let message;
    let extraMessage = "";

    if (now < RegisterDate) {
        const timeLeft = RegisterDate - now;
        message = `WesMun Registration Start in ${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours, ${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} minutes, and ${Math.floor((timeLeft % (1000 * 60)) / 1000)} seconds.`;
    } else if (now < StartDate) {
        const timeLeft = StartDate - now;
        message = `WesMun Start in ${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours, ${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} minutes, and ${Math.floor((timeLeft % (1000 * 60)) / 1000)} seconds.`;
    } else if (now <= EndDate) {
        message = "The Official WesMun has begun!";
    } else {
        message = "The Official WesMun has ended.";
    }

    document.getElementById("countdown").innerHTML = message + (extraMessage ? `<br>${extraMessage}` : "");

    if (now > EndDate) clearInterval(countdownTimer);
}, 1000);