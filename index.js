

const onTileClick = (container) => {
    container.addEventListener('click',(event) => {
        if(event.target === container) return;

    });
}

const GameBoard = (function(){
    const container = document.querySelector('.container');
    const gameBoard = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    for(let i = 0; i < gameBoard.length; i++){
        const tile = document.createElement('div');
        tile.classList.add('tiles');
        tile.id = `tile${i}`
        container.appendChild(tile);
    }
    onTileClick(container);
})();