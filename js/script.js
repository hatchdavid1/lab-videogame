const endTime = document.querySelector('#Time-left');
const resultScore = document.querySelector('#Result')
const StartPauseButton = document.querySelector('#Start-Pause-button')
const matrixSquare = document.querySelectorAll('.Matrix div')
const treesLeft = document.querySelectorAll('.Tree-left')
const treesRight = document.querySelectorAll('.Tree-right')
const carsLeft = document.querySelectorAll('.Car-left')
const carsRight = document.querySelectorAll('.Car-right')

let actualIndex = 76;
let rowLength = 9;
let timerID; 
let actualTime = 20;

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
    actualTime--;
    endTime.textContent = actualTime;
    treesLeft.forEach(treeLeft => treeMovementLeft(treeLeft))
    treesRight.forEach(treeLeft => treeMovementLeft(treeLeft))
    carsLeft.forEach(carLeft => carMovementLeft(carLeft))
    carsRight.forEach(carLeft => carMovementLeft(carLeft))
    gameOver()
    levelUp()
}

moveElement

function treeMovementLeft(treeLeft){
    switch(true){
        case treeLeft.classList.contains('t1'):
            treeLeft.classList.remove('t1')
            treeLeft.classList.add('t2')
            break
        case treeLeft.classList.contains('t2'):
            treeLeft.classList.remove('t2')
            treeLeft.classList.add('t3')
            break
        case treeLeft.classList.contains('t3'):
            treeLeft.classList.remove('t3')
            treeLeft.classList.add('t4')
            break
        case treeLeft.classList.contains('t4'):
            treeLeft.classList.remove('t4')
            treeLeft.classList.add('t5')
            break
        case treeLeft.classList.contains('t5'):
            treeLeft.classList.remove('t5')
            treeLeft.classList.add('t1')
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

function gameOver(){
    if (matrixSquare[actualIndex].classList.contains('c1') ||
    matrixSquare[actualIndex].classList.contains('t4') ||
    matrixSquare[actualIndex].classList.contains('t5') ||
    actualTime  <= 0
    ){
        resultScore.textContent = 'Looser!!!'
        clearInterval(timerID)
        matrixSquare[actualIndex].classList.remove('frog')
        document.removeEventListener('keydown', frogMovement)
    }    
}


function levelUp(){
    if (matrixSquare[actualIndex].classList.contains('Ending-Row')){ 
        resultScore.textContent = 'Level Up!!!'
        clearInterval(timerID)
        document.removeEventListener('keydown', frogMovement)
    }
}

timerID = setInterval(moveElement, 1200)