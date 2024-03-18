let container = document.getElementById('container')

function generateNewElementGrid(content){
    // creo un elemento del tipo <div>...</div>
    let newElement = document.createElement('div');
    newElement.classList.add('square-easy');
    return newElement;
}

// codice gioco perso
let list = [];
// list.push(generateUniqueRandomNumber(1, 100, list));
// console.log(list)


function getRandomInt(minimum, maximus){
    return Math.floor(Math.random() * (maximus - minimum + 1) ) + minimum;
}

function generateUniqueRandomNumber(min, max, blacklist){
    let isFound = false;
    let randomNumber;

    while(isFound === false){
        randomNumber = getRandomInt(min, max);
        if(blacklist.includes(randomNumber) === false){
            isFound = true
        }
    }
    return randomNumber;
}

// funzione termine gioco
function lose(){
    const lose = document.createElement('div');
    lose.className = 'game-end';
    grid.append(lose);
}

let play = document.getElementById('play');
play.addEventListener('click', function(){
    // genero la griglia in base alla difficoltà
    let difficulty = document.getElementById('difficulty').value;
    let grid = document.getElementById('grid');
    grid.innerHTML = ''
    grid.classList.add('d-block');   
    let gridElement = document.getElementById('grid');
    //creo ciclo for per inserire i quadrati nella grid
    if(difficulty == 'hard'){
        for(let i = 0; i < 16; i++){
            list.push(generateUniqueRandomNumber(1, 49, list))
            console.log(list);
        }
        for (let i = 0; i < 49; i++) {
            let newSquare = generateNewElementGrid()
            newSquare.classList.add('hard')
            // aggiungo quadrato alla grid
            gridElement.appendChild(newSquare);
            // coloro di azzurro quando clicco il quadrato
            newSquare.addEventListener('click', function(){
                newSquare.classList.add('square-click')
                console.log(`Hai selezionato la casella numero: ${i + 1}`);

                if(list.includes(i + 1)){
                    console.log('Hai perso')
                    newSquare.classList.add('bomb-red');
                    lose(true);
                }  
            });
    
        }
    } else if(difficulty == 'medium'){
        for(let i = 0; i < 16; i++){
            list.push(generateUniqueRandomNumber(1, 49, list))
            console.log(list);
        }
        for (let i = 0; i < 81; i++) {
            let newSquare = generateNewElementGrid()
            newSquare.classList.add('medium')
            // aggiungo quadrato alla grid
            gridElement.appendChild(newSquare);
            // coloro di azzurro quando clicco il quadrato
            newSquare.addEventListener('click', function(){
                newSquare.classList.add('square-click')
                console.log(`Hai selezionato la casella numero: ${i + 1}`);
                
                if(list.includes(i + 1)){
                    console.log('Hai perso')
                    newSquare.classList.add('bomb-red');
                    lose(true)
                }
            });
    
        }
    } else {
        for(let i = 0; i < 16; i++){
            list.push(generateUniqueRandomNumber(1, 100, list));
            console.log(list)
        }
        for (let i = 0; i < 100; i++) {
            let newSquare = generateNewElementGrid()
            // aggiungo quadrato alla grid
            gridElement.appendChild(newSquare);
            // coloro di azzurro quando clicco il quadrato
            newSquare.addEventListener('click', function(){
                newSquare.classList.add('square-click');
                
                if(list.includes(i + 1)){
                    console.log('Hai perso')
                    newSquare.classList.add('bomb-red');
                    lose(true)
                }
                console.log(`Hai selezionato la casella numero: ${i + 1}`);    
            })
    
        }
    }
})
