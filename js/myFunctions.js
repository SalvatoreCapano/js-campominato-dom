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

// Crea un elemento cella e applica l'event Listener
function createCell (index) {

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
        } 
        // Caso partita non persa
        else {
            if (!(this.classList.contains("active"))) {
                score++;
            }
        }
        this.classList.add("active");
        console.log("Punteggio:", score);
    });

    return newElement;
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

// Riempie la griglia con gli elementi cella creati
function fillGrid () {

    for (let i = 0; i < cellsNumber; i++) {

        // Creazione e aggiunta nuovo elemento cell
        newCell = createCell (i);
        grid.append(newCell);
    };
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