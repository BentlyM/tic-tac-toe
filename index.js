const gameBoard = [];
const player = {};
const gameFlow = {};

const onTileClick = (container) => {
    container.addEventListener('click',(event) => {
        if(event.target === container) return;
        
    });
}

(function(){
    const container = document.querySelector('.container');
    const MAX_TILES = 9;
    for(let i = 0; i < MAX_TILES; i++){
        const tile = document.createElement('div');
        tile.classList.add('tiles');
        tile.id = `tile${i}`
        container.appendChild(tile);
    }
    onTileClick(container);
})();