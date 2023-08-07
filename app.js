const scoreHome = document.querySelector('#score-home')
const scoreAway = document.querySelector('#score-away')
const btnPlusHome = document.querySelector('#plus-home-score')
const btnPlusAway = document.querySelector('#plus-away-score')
const btnReset = document.querySelector('#reset-score')

let displayScoreHome = 0
let displayScoreAway = 0

btnPlusHome.addEventListener('click', () => {
  displayScoreHome += 1
  scoreHome.textContent = displayScoreHome
})

btnPlusAway.addEventListener('click', () => {
  displayScoreAway += 1
  scoreAway.textContent = displayScoreAway
})

btnReset.addEventListener('click', () => {
  displayScoreAway = 0
  displayScoreHome = 0
  scoreAway.textContent = displayScoreAway
  scoreHome.textContent = displayScoreHome
})