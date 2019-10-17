let btnNew = document.getElementById('btn-new');
let box = document.getElementsByClassName('box');
let playerX = document.getElementById('player-x');
let playerO = document.getElementById('player-o');
let turn = 0;
let victory = false;


init();

// Retreive clicked box target

function play(elem) {
    let x = elem.id;

    console.log(elem.id);

    // Alternate turns
    if (victory !== true) {
        if (elem.classList.contains('play-o') !== true && elem.classList.contains('play-x') !== true) {
            if (turn === 0) {
                elem.classList.add('play-x');
            } else {
                elem.classList.add('play-o');
            }
        } else {
            alert('Please select a different box.');
        }
    }
    win();
}

// Changes player turns
let nextPlayer = function () {
    if (turn === 0) {
        turn = 1;
        playerO.style.display = 'block';
        playerX.style.display = 'none';
    } else {
        turn = 0;
        playerX.style.display = 'block';
        playerO.style.display = 'none';
    }
}


// Check if game has been won
let win = function () {
    let d1 = document.getElementById('d1').classList;
    let d2 = document.getElementById('d2').classList;
    let d3 = document.getElementById('d3').classList;
    let d4 = document.getElementById('d4').classList;
    let d5 = document.getElementById('d5').classList;
    let d6 = document.getElementById('d6').classList;
    let d7 = document.getElementById('d7').classList;
    let d8 = document.getElementById('d8').classList;
    let d9 = document.getElementById('d9').classList;

    // Check game boxes for possible win
    if (d1.contains('play-x') && d2.contains('play-x') && d3.contains('play-x') || d4.contains('play-x') && d5.contains('play-x') && d6.contains('play-x') ||
        d7.contains('play-x') && d8.contains('play-x') && d9.contains('play-x') || d1.contains('play-x') && d4.contains('play-x') && d7.contains('play-x') ||
        d2.contains('play-x') && d5.contains('play-x') && d8.contains('play-x') || d3.contains('play-x') && d6.contains('play-x') && d9.contains('play-x') ||
        d1.contains('play-x') && d5.contains('play-x') && d9.contains('play-x') || d7.contains('play-x') && d5.contains('play-x') && d3.contains('play-x')) {
        victory = true;
        playerX.textContent = 'Player X wins!!!';
        playerX.style.background = 'crimson';
    } else if (d1.contains('play-o') && d2.contains('play-o') && d3.contains('play-o') || d4.contains('play-o') && d5.contains('play-o') && d6.contains('play-o') ||
        d7.contains('play-o') && d8.contains('play-o') && d9.contains('play-o') || d1.contains('play-o') && d4.contains('play-o') && d7.contains('play-o') ||
        d2.contains('play-o') && d5.contains('play-o') && d8.contains('play-o') || d3.contains('play-o') && d6.contains('play-o') && d9.contains('play-o') ||
        d1.contains('play-o') && d5.contains('play-o') && d9.contains('play-o') || d7.contains('play-o') && d5.contains('play-o') && d3.contains('play-o')) {
        victory = true;
        playerO.textContent = 'Player O wins!!!';
        playerO.style.background = 'crimson';
    } else {
        nextPlayer();
    }
}

// Creates new game when button is clicked
btnNew.addEventListener('click', init);

function init() {
    victory = false;
    // Erase game board
    for (let i = 0; i < box.length; i++) {
        box[i].classList.remove('play-o', 'play-x');
    }

    // Set player X to active player
    playerX.style.display = 'block';
    playerO.style.display = 'none';

    // Reset Text Content
    playerX.textContent = 'Player X';
    playerO.textContent = 'Player O';

    playerX.style.background = 'rgb(0, 191, 224)';
    playerO.style.background = 'rgb(0, 191, 224)';
}