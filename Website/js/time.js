const timeToStart = new Date("December 1, 2024 00:00:00").getTime();
const timeToEnd = new Date("December 3, 2024 00:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = Date.now();
    let message;
    let extraMessage = "";

    if (now < timeToStart) {
        const timeLeft = timeToStart - now;
        message = `Theme reveal in ${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours, ${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} minutes, and ${Math.floor((timeLeft % (1000 * 60)) / 1000)} seconds.`;
    } else {
        message = "The Official Wesgreen Hackathon has begun!";
    }

    document.getElementById("countdown").innerHTML = message + (extraMessage ? `<br>${extraMessage}` : "");

    if (now > timeToEnd) clearInterval(countdownTimer);
}, 1000);