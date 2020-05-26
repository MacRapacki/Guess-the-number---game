let numberAtt = 0
let numberToFind = ""

const playerNumber = document.querySelector("input")
const checkBtn = document.querySelector('.check')
const attempt = document.querySelector('.attempt')
const lastGuess = document.querySelector('.lastGuess')
const hint = document.querySelector('.hint')
const resetBtn = document.querySelector('.reset')


// CHECK BUTTON 
checkBtn.addEventListener('click', () => {
    const value = playerNumber.value;
    if (value === "" || value > 100) {
        alert('type number between 0-100')
    } else {

        if (value > numberToFind) {
            hint.innerHTML = `Number is less than ${value}`;
            numberAtt++;
            attempt.innerHTML = `${numberAtt}`;
            lastGuess.innerHTML = value;
        } else if (value < numberToFind) {
            hint.innerHTML = `Number is greater than ${value}`
            numberAtt++;
            attempt.innerHTML = `${numberAtt}`;
            lastGuess.innerHTML = value;
        } else {
            alert('Congratulations, You guessed the number. Try Again!')
            hint.innerHTML = ` `;
            numberAtt = 0;
            attempt.innerHTML = `${numberAtt}`;
            lastGuess.innerHTML = " ";
            playerNumber.value = null
            draw();
        }
    }
})

// RESET BUTTON
resetBtn.addEventListener('click', () => {
    hint.innerHTML = ` `;
    numberAtt = 0;
    attempt.innerHTML = `${numberAtt}`;
    lastGuess.innerHTML = " ";
    playerNumber.value = null
    draw();
})


const draw = () => {
    numberToFind = Math.floor(Math.random() * 101)
}

draw()