function main() {
    // Check if the game is already lost
    let confirm = document.getElementById("mainResult").innerHTML;
    if (confirm == "You've Lost!") {
        // Play lose sound
        let loseSound = document.getElementById("sound-lose");
        loseSound.play().catch(error => console.error("Lose sound failed:", error));
        alert("Game over! Please restart the game.");
        return;
    }

    // Generate a random card value
    let x;
    do {
        x = Math.floor(Math.random() * 100 / 7.6); // Adjust this logic for better randomization if needed
    } while (x == 0);

    // Get the current total
    let currentTotal = parseInt(document.getElementById("result").innerHTML);
    let total = currentTotal + x;

    // Update the total score
    document.getElementById("result").innerHTML = total;

    // Play the 'card' sound when generating a card
    let cardSound = document.getElementById("sound-card");
    cardSound.play().catch(error => console.error("Card sound failed:", error));

    // Check the game result
    if (total < 21) {
        document.getElementById("mainResult").innerHTML = "Generate another card?";
    } else if (total == 21) {
        document.getElementById("mainResult").innerHTML = "You've won!!";
        alert("Congratulations!");

        // Play win sound
        let winSound = document.getElementById("sound-win");
        winSound.play().catch(error => console.error("Win sound failed:", error));

        document.getElementById("btn-restart").style.display = "block"; // Show restart button
    } else if (total > 21) {
        document.getElementById("mainResult").innerHTML = "You've Lost!";
        alert("You Lost! Click restart to play again.");

        // Play lose sound
        let loseSound = document.getElementById("sound-lose");
        loseSound.play().catch(error => console.error("Lose sound failed:", error));

        document.getElementById("btn-restart").style.display = "block"; // Show restart button
    }

    // Display card image dynamically
    var img = document.createElement("img");
    img.src = "images/" + x + ".png"; // Ensure images match card values
    img.height = 300;

    document.body.appendChild(img); // Append the image to the body
}

// Restart the game by refreshing the page
function restart() {
    location.reload();
}
