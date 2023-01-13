// Imposta dimensione celle in base al loro numero
function setCellSize (number) {

    if (number == 100) {
        root.style.setProperty("--cellSize", "calc(100% / 10)");
    }
    else if (number == 81) {
        root.style.setProperty("--cellSize", "calc(100% / 9)");
    }
    else if (number == 49) {
        root.style.setProperty("--cellSize", "calc(100% / 7)");
    }
};

// Genera un numero casuale tra 1 e index
function getRandomNumber(index) {
    return Math.floor(Math.random() * (index - 1) + 1)
}

// Genera l'array contenente le posizioni delle bombe
function setBombsPositions (maxIndex) {

    let myArray = [];
    let newRandomNumber;

    for (let i = 0; i < 16; i++) {

        do {
            newRandomNumber = getRandomNumber (maxIndex);
        }
        while (myArray.includes(newRandomNumber));

        myArray.push(newRandomNumber);
    }

    return myArray;
};

// Controlla se l'elemento cliccato e' una bomba
function checkGameOver (array, currentIndex) {

    // Controlla se la cella corrisponde ad una bomba
    if (array.includes(parseInt(currentIndex))) {
        return true;
    }
    else {
        return false;
    }
}

// Mostra tutte le bombe
function showBombs (bombsPositions) {
    let allCells = document.querySelectorAll(".cell");

    for (let i = 0; i < 16; i++) {
        let index = bombsPositions [i] - 1;
        allCells[index].classList.add("bomb");
        allCells[index].classList.add("active");
        console.log("Sto mostrando le bombe...");;
    }
}

// Crea un elemento cella e applica l'event Listener
function createCell (index) {

    // Crea la cella e ci stampa il numero corrispondente
    const newElement = document.createElement("div");
    newElement.classList.add("cell");
    newElement.innerText = index + 1;

    // Listener Evento click sulla cella 
    newElement.addEventListener("click", function(){
        console.log("----------");
        console.log("Hai cliccato la cella", this.innerText);

        // Caso partita persa
        if (checkGameOver(bombsPositions, this.innerText)) {
            this.classList.add("bomb");
            console.log("BOMBA");
            
            showBombs(bombsPositions);
            grid.classList.add("overlay");
            root.style.setProperty("--overlayMessage", `'game over'`);
        } 
        // Caso partita non persa
        else {
            if (!(this.classList.contains("active"))) {
                score++;
                scoreContainer.innerText = `Il tuo punteggio è ${score}`;
                // Caso partita vinta
                if (score >= maxScore) {
                    showBombs(bombsPositions);
                    grid.classList.add("overlay");
                    root.style.setProperty("--overlayMessage", `'hai vinto'`);
                }
            }
        }
        this.classList.add("active");
        console.log("Punteggio:", score);
    });

    return newElement;
};

// Riempie la griglia con gli elementi cella creati
function fillGrid (maxIndex) {

    for (let i = 0; i < maxIndex; i++) {

        // Creazione e aggiunta nuovo elemento cell
        newCell = createCell (i);
        grid.append(newCell);
    };

};