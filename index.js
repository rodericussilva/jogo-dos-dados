var randomNumber1 = Math.floor(Math.random() * 6) + 1

var randomDiceImg = "dice" + randomNumber1 + ".png"

var randomImgSrc = "images/" + randomDiceImg

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc)

var randomNumber2 = Math.floor(Math.random() * 6) + 1

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png"

var image2 = document.querySelectorAll('img')[1].setAttribute("src", randomImgSrc2)

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Jogador 1 Venceu!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Jogador 2 Venceu!"
} else {
    document.querySelector('h1').innerHTML = "🎌 Empate! 🎌"
}