const endtime = document.querySelector('#Time-left');
const resultScore = document.querySelector('#Result')
const StartPauseButton = document.querySelector('#Start-Pause-button')
const matrixSquare = document.querySelectorAll('.Matrix div')

let actualIndex = 76;
let rowLength = 9;
function frogMovement(tecla) {
    //console.log('Movimiento');
    matrixSquare[actualIndex].classList.remove('frog')
    switch(tecla.keyCode){
        case 37:
            console.log('left move');
            actualIndex -=1; 
            break
        case 39:
            console.log('right move');
            actualIndex +=1;
            break
        case 38:
            console.log('up move');
            actualIndex -= rowLength
            break
        case 40:
            console.log('down move');
            actualIndex += rowLength
            break;
    }


    matrixSquare[actualIndex].classList.add('frog')
}

document.addEventListener('keydown', frogMovement)