function guessingGame() {
    const secret = Math.floor(Math.random() * 100);
    let state = "active";
    let guesses = 0;
    return function (number) {
        if (state === "active") guesses++;
        else if (state === "over") return "The game is over, you already won!";
        if (number > secret) {
            return `${number} is too high!`;
        } else if (number < secret) {
            return `${number} is too low!`;
        } else {
            state = "over";
            return `You win! You found ${number} in ${guesses} guesses.`;
        }
    }
}

module.exports = { guessingGame };
