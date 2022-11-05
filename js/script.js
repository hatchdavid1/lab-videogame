const endtime = document.querySelector('#Time-left');
const resultScore = document.querySelector('#Result')
const StartPauseButton = document.querySelector('#Start-Pause-button')
const matrixSquare = document.querySelectorAll('.Matrix div')
const treesLeft = document.querySelectorAll('.Tree-left')


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

function moveTrees(){
    treesLeft .forEach(treeLeft => treeMovementLeft(treeLeft))
}

moveTrees

function treeMovementLeft(treeLeft){
    switch(true){
        case treeLeft.classList.contains('l1'):
            treeLeft.classList.remove('l1')
            treeLeft.classList.add('l2')
            break
        case treeLeft.classList.contains('l2'):
            treeLeft.classList.remove('l2')
            treeLeft.classList.add('l3')
            break
        case treeLeft.classList.contains('l3'):
            treeLeft.classList.remove('l3')
            treeLeft.classList.add('l4')
            break
        case treeLeft.classList.contains('l4'):
            treeLeft.classList.remove('l4')
            treeLeft.classList.add('l5')
            break
        case treeLeft.classList.contains('l5'):
            treeLeft.classList.remove('l5')
            treeLeft.classList.add('l1')
            break
    }
}


setInterval(moveTrees, 1000)