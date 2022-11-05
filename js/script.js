const endtime = document.querySelector('#Time-left');
const resultScore = document.querySelector('#Result')
const StartPauseButton = document.querySelector('#Start-Pause-button')
const matrixSquare = document.querySelectorAll('.Matrix div')
const treesLeft = document.querySelectorAll('.Tree-left')
const treesRight = document.querySelectorAll('.Tree-right')
const carsLeft = document.querySelectorAll('.Car-left')
const carsRight = document.querySelectorAll('.Car-right')

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

function moveElement(){
    treesLeft.forEach(treeLeft => treeMovementLeft(treeLeft))
    treesRight.forEach(treeLeft => carMovementLeft(treeLeft))
    carsLeft.forEach(carLeft => carMovementLeft(carLeft))
    carsRight.forEach(carLeft => carMovementLeft(carLeft))
}

moveElement

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


function carMovementLeft(carLeft){
    switch(true){
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
            break
        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
            break
        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
            break
    }
}



setInterval(moveElement, 1000)