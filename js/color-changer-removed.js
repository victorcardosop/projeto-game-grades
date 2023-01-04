//CONTEÚDO REMOVIDO DA PÁGINA

// VARIÁVEIS DOS SELETORES A SEREM ALTERADOS
const body = document.querySelector('body')
const header = document.querySelector('header')
const main = document.querySelector('main')
const selection = document.querySelector('#selection')
const genresLabel = document.querySelector('#genresLabel')
const gamesList = document.querySelector('#gamesList')
const gameBox = document.querySelectorAll('.game')
const gameImage = document.querySelectorAll('.gameImage')

// Blue

const blue = document.querySelector('#blue')
blue.addEventListener('click', changeToBlue)

function changeToBlue() {
    body.style.backgroundColor = "#071040"
    header.style.borderColor = "#1F8C8E"
    main.style.borderColor = "#1F8C8E"
    selection.style.borderColor = "#1F8C8E"
    genresLabel.style.borderColor = "#1F8C8E"
    gamesList.style.borderColor = "#1F8C8E"
    h1.style.backgroundColor = "#1F8C8E"
    h1.style.borderColor = "#071040"
    for(i = 0 ; i < gamesCount ; i++) {
        gameBox[i].style.borderColor = "#071040"
        gameBox[i].style.backgroundColor= "#1F8C8E"
        gameImage[i].style.borderColor = "#071040"
    }
}

// Orange
const orange = document.querySelector('#orange')
orange.addEventListener('click', changeToOrange)

function changeToOrange() {
    body.style.backgroundColor = "#D78C09"
    header.style.borderColor = "#F5C46E"
    main.style.borderColor = "#F5C46E"
    selection.style.borderColor = "#F5C46E"
    genresLabel.style.borderColor = "#F5C46E"
    gamesList.style.borderColor = "#F5C46E"
    h1.style.backgroundColor = "#D78C09"
    h1.style.borderColor = "#F5C46E"
    for(i = 0 ; i < gamesCount ; i++) {
        gameBox[i].style.borderColor = "#F5C46E"
        gameBox[i].style.backgroundColor= "#D78C09"
        gameImage[i].style.borderColor = "#F5C46E"
    }
}

// Green
const green = document.querySelector('#green')
green.addEventListener('click', changeToGreen)

function changeToGreen() {
    body.style.backgroundColor = "#0B6505"
    header.style.borderColor = "#87E572"
    main.style.borderColor = "#87E572"
    selection.style.borderColor = "#87E572"
    genresLabel.style.borderColor = "#87E572"
    gamesList.style.borderColor = "#87E572"
    h1.style.backgroundColor = "#0B6505"
    h1.style.borderColor = "#3D7B0C"
    for(i = 0 ; i < gamesCount ; i++) {
        gameBox[i].style.borderColor = "#3D7B0C"
        gameBox[i].style.backgroundColor= "#0B6505"
        gameImage[i].style.borderColor = "#3D7B0C"
    }
}

// Red
const red = document.querySelector('#red')
red.addEventListener('click', changeToRed)

function changeToRed() {
    body.style.backgroundColor = "#EF0D0D"
    header.style.borderColor = "#890505"
    main.style.borderColor = "#890505"
    selection.style.borderColor = "#890505"
    genresLabel.style.borderColor = "#890505"
    gamesList.style.borderColor = "#890505"
    h1.style.backgroundColor = "#890505"
    h1.style.borderColor = "#EF0D0D"
    for(i = 0 ; i < gamesCount ; i++) {
        gameBox[i].style.borderColor = "#EF0D0D"
        gameBox[i].style.backgroundColor= "#890505"
        gameImage[i].style.borderColor = "#EF0D0D"
    }
}