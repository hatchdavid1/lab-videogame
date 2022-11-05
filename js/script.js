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
            if (actualIndex % rowLength !==0) actualIndex -=1; 
            break
        case 39:
            if (actualIndex % rowLength  < rowLength-1) actualIndex +=1;
            break
        case 38:
            if (actualIndex - rowLength  >= 0) actualIndex -= rowLength
            break
        case 40:
            if (actualIndex + rowLength  < rowLength * rowLength) actualIndex += rowLength
            break;
    }


    matrixSquare[actualIndex].classList.add('frog')
}

document.addEventListener('keydown', frogMovement)