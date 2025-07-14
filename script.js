const tails = './resources/tails.svg'
const heads = './resources/heads.svg'

const button = document.getElementById('random')
const image = document.getElementById('image')
const resultText = document.querySelector('.result')
button.addEventListener('click', () => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails"
    if (result === "Heads") {
        image.setAttribute('src', heads)
        resultText.textContent = 'Heads'
    } else {
        image.setAttribute('src', tails)
        resultText.textContent = 'Tails'
    }
})