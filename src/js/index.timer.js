const RegisterDate = new Date("December 20, 2024 00:00:00").getTime();
const LateReDate = new Date("January 10, 2025 11:59:00").getTime();
const StartDate = new Date("February 13, 2025 00:00:00").getTime();
const EndDate = new Date("February 16, 2025 00:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = Date.now();
    let message;

    if (now < RegisterDate) {
        const timeLeft = RegisterDate - now;
        message = `You only have ${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours, ${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} minutes, and ${Math.floor((timeLeft % (1000 * 60)) / 1000)} seconds to complete early registration payment!`;
    } else if (now < LateReDate) {
        const timeLeft = LateReDate - now;
        message = `You only have ${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours, ${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} minutes, and ${Math.floor((timeLeft % (1000 * 60)) / 1000)} seconds to complete late registration payment!`;
    } else if (now < StartDate) {
        const timeLeft = StartDate - now;
        message = `WESMUN will officially start in ${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours, ${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} minutes, and ${Math.floor((timeLeft % (1000 * 60)) / 1000)} seconds.`;
    } else if (now <= EndDate) {
        message = "WESMUN has begun - See you there!";
    } else {
        message = "WESMUN has ended.";
    }

    document.getElementById("countdown").innerHTML = message;

    if (now > EndDate) clearInterval(countdownTimer);
}, 1000);