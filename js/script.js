/*

-Generare 16 numeri casuali diversi tra loro:
    -Range 1-100
    -Range 1-81
    -Range 1-49
-Al click sulla cella Controllare uguaglianza numero cliccato e elementi array bomba
    -Se Uguali: 
        -applicare alla cella colore sconfitta
        -partita terminata
        -stampare punteggio
        -rendere le celle non cliccabili
    -Se Non uguali:
        -applicare alla cella colore vittoria
        -aumentare punteggio
        -controllare punteggio:
            -se punteggio >= (numero celle - numero bombe)
                -partita terminata
                -stampare punteggio
                -rendere le celle non cliccabili

*/





// Bonus
const playBtn = document.querySelector("#playBtn");
const grid = document.querySelector(".grid");
const difficulty = document.querySelector("#difficulty");
const root = document.querySelector(":root");

// Numero di celle
let cellsNumber;

playBtn.addEventListener("click", function(){

    // Svuota la griglia
    grid.innerHTML = "";
    // Svuota la console
    console.clear();

    // Se non presente, mostra la griglia
    if (!grid.classList.contains("show")) {
        grid.classList.add("show");
    }

    // Ottiene il numero di celle da generare
    cellsNumber = difficulty.value;
    setCellSize();

    // Riempie la griglia
    for (let i = 0; i < cellsNumber; i++) {

        // Creazione e aggiunta nuovo elemento cell
        const newCell = document.createElement("div");
        newCell.classList.add("cell");

        newCell.innerHTML = i + 1;

        grid.append(newCell);

        newCell.addEventListener("click", function(){
            console.log("Hai cliccato la cella", this.innerHTML);
            this.classList.add("active");
            
        });
    }

});


function setCellSize() {
    if (cellsNumber == 100) {
        root.style.setProperty("--cellSize", "calc(100% / 10)");
    }
    else if (cellsNumber == 81) {
        root.style.setProperty("--cellSize", "calc(100% / 9)");
    }
    else if (cellsNumber == 49) {
        root.style.setProperty("--cellSize", "calc(100% / 7)");
    }
}