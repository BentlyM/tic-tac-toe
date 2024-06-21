const availableSquares = [
    "", "", "",
    "", "", "",
    "", "", ""
];

const onTileClick = (container) => {
    container.addEventListener('click',(event)=>{
        if(event.target === container) throw `${event.target} === ${container}`;
        console.log(
            `Tile ${event.target.id} was clicked`
        )
    })
}

const GameBoard = (function(){
    const container = document.querySelector('.container');
    let currentPlayer = '';
    let player2 = ''
    let computerBot = '';
    let gameOver = false;
    let winningCombinations = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6']
    ];

    for(let i = 0; i < availableSquares.length; i++){
        const tile = document.createElement('div');
        tile.classList.add('tiles');
        tile.id = i;
        container.appendChild(tile);
    }
})();