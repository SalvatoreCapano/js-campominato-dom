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

const root = document.querySelector(":root");
const playBtn = document.querySelector("#playBtn");
const grid = document.querySelector(".grid");
const scoreContainer = document.querySelector(".scoreContainer");

const difficulty = document.querySelector("#difficulty");

let cellsNumber;
let bombsPositions;
let score = 0;

// Nuova partita
playBtn.addEventListener("click", function(){

    // Svuota la griglia
    grid.innerHTML = "";
    grid.classList.remove("overlay");

    // Svuota la console
    console.clear();

    // Resetta punteggio
    score = 0;
    scoreContainer.innerText = `Il tuo punteggio è ${score}`;
    
    // Se non presenti, mostra la griglia e il container del punteggio
    if (!grid.classList.contains("show") || !scoreContainer.classList.contains("show")) {
        grid.classList.add("show");
        scoreContainer.classList.add("show");
    }

    // Ottiene il numero di celle da generare e le dimensiona di conseguenza
    cellsNumber = difficulty.value;
    setCellSize(cellsNumber);

    // Generazione posizioni bombe
    bombsPositions = setBombsPositions(cellsNumber).sort((a,b)=>a-b);
    console.log(`Ci sono ${bombsPositions.length} bombe`);
    // console.log("Bombe generate alle posizioni:", bombsPositions);

    // Calcolo Punteggio massimo raggiungibile
    maxScore = cellsNumber - bombsPositions.length;
    console.log(`Obbiettivo: arrivare a ${maxScore} punti`);

    // Riempie la griglia
    fillGrid ();
});