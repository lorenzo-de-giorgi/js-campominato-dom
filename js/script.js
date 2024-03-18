// <div class="square-easy"></div>
function generateNewElementGrid(content){
    // creo un elemento del tipo <div>...</div>
    let newElement = document.createElement('div');
    newElement.classList.add('square-easy');
    return newElement;
}

let play = document.getElementById('play');
play.addEventListener('click', function(){
    // genero la griglia in base alla difficoltà
    let difficulty = document.getElementById('difficulty').value;
    let grid = document.getElementById('grid');
    grid.innerHTML = ''
    let rBtnN = document.getElementById('reset-btn')
    grid.classList.add('d-block');   
    rBtnN.classList.add('d-flex');
    let gridElement = document.getElementById('grid');
    //creo ciclo for per inserire i quadrati nella grid
    if(difficulty == 'hard'){
        for (let i = 0; i < 49; i++) {
            let newSquare = generateNewElementGrid()
            newSquare.classList.add('hard')
            // aggiungo quadrato alla grid
            gridElement.appendChild(newSquare);
            console.log('ok')
            // coloro di azzurro quando clicco il quadrato
            newSquare.addEventListener('click', function(){
                newSquare.classList.add('square-click')
                console.log(`Hai selezionato la casella numero: ${i + 1}`);    
            })
    
            let resetButton = document.getElementById('reset');
            resetButton.addEventListener('click', function(){
                newSquare.classList.remove('square-click');
                console.log('Gioco Ricominciato')
            })
        }
    } else if(difficulty == 'medium'){
        for (let i = 0; i < 81; i++) {
            let newSquare = generateNewElementGrid()
            newSquare.classList.add('medium')
            // aggiungo quadrato alla grid
            gridElement.appendChild(newSquare);
            console.log('ok')
            // coloro di azzurro quando clicco il quadrato
            newSquare.addEventListener('click', function(){
                newSquare.classList.add('square-click')
                console.log(`Hai selezionato la casella numero: ${i + 1}`);    
            })
    
            let resetButton = document.getElementById('reset');
            resetButton.addEventListener('click', function(){
                newSquare.classList.remove('square-click');
                console.log('Gioco Ricominciato')
            })
        }
    } else {
        for (let i = 0; i < 100; i++) {
            let newSquare = generateNewElementGrid()
            // aggiungo quadrato alla grid
            gridElement.appendChild(newSquare);
            console.log('ok')
            // coloro di azzurro quando clicco il quadrato
            newSquare.addEventListener('click', function(){
                newSquare.classList.add('square-click')
                console.log(`Hai selezionato la casella numero: ${i + 1}`);    
            })
    
            let resetButton = document.getElementById('reset');
            resetButton.addEventListener('click', function(){
                newSquare.classList.remove('square-click');
                console.log('Gioco Ricominciato')
            })
        }
    }
})

// creo una variabile per assegnare dove mettere i quadrati
