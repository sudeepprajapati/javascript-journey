let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []

let numGuesses = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number between 1 and 100.')
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100.')
    } else {
        prevGuess.push(guess)
        if (numGuesses === 11) {
            displayGuess(guess)
            displayMessage('Game Over! You have used all your guesses.')
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('🎉 Congratulations! You guessed the number!');
        remaining.textContent = `You guessed it in ${numGuesses} tries!`;
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('📉 Your guess is too low!');
    } else if (guess > randomNumber) {
        displayMessage('📈 Your guess is too high!');
    }
}


function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuesses++
    remaining.innerHTML = `You have ${11 - numGuesses} guesses left.`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', true)
    p.classList.add('button')
    p.innerHTML = `<button class="btn" id="newGame" onclick="newGame()">Start New Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        guessSlot.innerHTML = ''
        remaining.innerHTML = `You have ${11 - numGuesses} guesses left.`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
    })
}
