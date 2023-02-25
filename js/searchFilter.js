// POPULADOR DOS ARRAYS DE JOGOS, NOTAS, GÊNEROS E PLATAFORMAS

    let games = []
    const h2 = document.querySelectorAll('h2')
    for(i = 0 ; i < h2.length ; i++) {
        games[i] = h2[i].innerText
        games[i] = games[i].toLowerCase()
    }

    let grades = []
    const span = document.querySelectorAll('.rate')
    for(i = 0 ; i < span.length ; i++) {
        grades[i] = span[i].innerText
    }

    let genres = []
    let genreDiv = document.querySelectorAll('.colorizer')
    for(i = 0; i < genreDiv.length ; i++) {
        genres[i] = genreDiv[i].classList[1]
        if (genreDiv[i].classList[2] !== undefined) {
            genres[i] += ` ${genreDiv[i].classList[2]}`
        }
    }

    let platforms = []
    let platformH3 = document.querySelectorAll('h3')
    for(i = 0 ; i < platformH3.length ; i++) {
        platforms[i] = platformH3[i].innerText
        platforms[i] = platforms[i].toLowerCase()
    }

    // SISTEMA DE BUSCA POR NOME DOS JOGOS
    const h1 = document.querySelector('#gamesCount')
    const li = document.querySelector('.game')
    const ul = document.querySelector('#games')
    const search = document.querySelector('#searchGame')
    // const searchGrade = document.querySelector('#chooseGrade')

    t = ul
    search.onkeyup=function(e) {
         t = this.value.toLowerCase()
         
         r = new RegExp(t,"g")

         for(i in games){
            if( games[i].match(r)) {
                ul.children[i].removeAttribute("style")
            } else {
                ul.children[i].style.display="none"
            }
         }
    }

    // SISTEMA DE BUSCA POR NOTAS
    let gradeSelected = document.querySelector('#chooseGrade')

    // gradeSelected.onkeyup=function(e)
    gradeSelected.onchange=function(e) {
        gradeSelected = document.querySelector('#chooseGrade').value
        for(i in grades){
            if( grades[i] === gradeSelected ) {
                ul.children[i].removeAttribute("style")
            } else if (gradeSelected === '') {
                ul.children[i].removeAttribute("style")
            } else {
                ul.children[i].style.display="none"
            }
        }
    }

    // SISTEMA DE BUSCA POR ORDEM ALFABÉTICA
    let alphabeticalOrder = document.querySelector('#chooseOrder')

    alphabeticalOrder.onchange=function(e) {
        alphabeticalOrder = document.querySelector('#chooseOrder').value
        for(i in games) {
            if(alphabeticalOrder === "a-z") {
                games.sort()
            } else if (alphabeticalOrder === "z-a") {

            }
        }
    }

    // SISTEMA DE BUSCA POR GÊNERO
    let gameGenre = document.querySelector('#chooseGenre')

    gameGenre.onchange=function(e) {
        gameGenre = document.querySelector('#chooseGenre').value
        for(i in genres){
            if( genres[i].match(gameGenre) ) {
                ul.children[i].removeAttribute("style")
            } else {
                ul.children[i].style.display="none"
            }
        }
    }

    // SISTEMA DE BUSCA POR PLATAFORMA

    let gamePlatform = document.querySelector('#choosePlatform')

    gamePlatform.onchange=function(e) {
        gamePlatform = document.querySelector('#choosePlatform').value
        for(i in platforms){
            if( platforms[i].match(gamePlatform) ) {
                ul.children[i].removeAttribute("style")
            }  else {
                ul.children[i].style.display="none"
            }
        }
    }