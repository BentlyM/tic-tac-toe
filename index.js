const GameBoard = (() => {

    let winningCombinations = [
        ['0','1','2'], // row
        ['3','4','5'], // row
        ['6','7','8'], // row
        ['0','3','6'], // columns
        ['1','4','7'], // columns
        ['2','5','8'], // columns
        ['0','4','8'], //diagonal
        ['2','4','6'] // diagonal
    ];

    const availableSquares = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    const player = {
        name : '',
        marker : 'x',
        turn: true
    }
    const opponent = {
        name : '',
        marker: 'o',
        turn: false
    }

    const container = document.querySelector('.container');

const gameBoard = {
        init: function() {
            this.createTiles();
            this.addEventListeners();
        },
        createTiles: function(){
            for(let i = 0; i < availableSquares.length; i++){
                const tile = document.createElement('div');
                tile.classList.add('tiles');
                tile.id = i;
                container.appendChild(tile);
            }
        },
        addEventListeners: function(){
            container.addEventListener('click',(event)=>{
                if(event.target === container) throw `${event.target} === ${container}`;
                const clickedTile = event.target.closest('.tiles');

                this.updateSquare(clickedTile);
                console.table(availableSquares); // you literally did it here bro -- .flat();
            })
        },
        updateSquare: function(currentTile){

            const squareIndex = Array.prototype.indexOf.call(container.children , currentTile);
            console.log(squareIndex);
            const elements = Array.from(document.querySelectorAll('.container'))

            if(availableSquares[squareIndex] === ''){

                availableSquares[squareIndex] = player.marker;
                currentTile.textContent = player.marker;

                if(elements.every((element) => element.innerHTML === '')){
                    console.log('all arrays are empty');
                }else{
                    console.log('not all arrays are empty');
                    // if not empty we are gonna check if the player has won if not then toggle 
                    this.checkWin(); // check if winner
                    // prob gonna have to put the bot function here
                }
            }else{
                alert('you already picked that bitch.');
                return null;
            }
        },
        checkWin : function(){
            const board = availableSquares.slice();

            for(const combination of winningCombinations){
                if(this.checkCombination(combination, board)){
                    console.log('Winner');
                    return 'Winner';
                }
            }

            if(board.every(cell => cell !== '')){
                return 'Draw';
            }

            return null;
        },

        checkCombination: function(combination , board){
            const [a , b , c] = combination;
            console.log(`${a} , ${b} , ${c}`);
            return board[a] && board[a] === board[b] && board[a] === board[c];
        }

    }
    gameBoard.init();
})();