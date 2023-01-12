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

const playBtn = document.querySelector("#playBtn");
const grid = document.querySelector(".grid");
const difficulty = document.querySelector("#difficulty");
const root = document.querySelector(":root");

let cellsNumber;

// Nuova partita
playBtn.addEventListener("click", function(){

    // Svuota la griglia
    grid.innerHTML = "";

    // Svuota la console
    console.clear();

    // Se non presente, mostra la griglia
    if (!grid.classList.contains("show")) {
        grid.classList.add("show");
    }

    // Ottiene il numero di celle da generare e le dimensiona di conseguenza
    cellsNumber = difficulty.value;
    setCellSize(cellsNumber);

    // Riempie la griglia
    fillGrid ();
});