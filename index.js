const runGameBoard = (() => {

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

    const container = document.querySelector('.container');

    const gameBoard = {
        init: function() {
            this.createTiles();
            this.addEventListeners();
            this.players = this.createCompetition();
            this.currentTurn = this.players.player;
        },

        user: function(competitor, name, marker){
            let isTurn = true;

            return {
                competitor,
                name,
                marker,

                isTurn: function() {
                    return isTurn;
                },

                toggleTurn: function() {
                    isTurn = !isTurn;
                }
            }
        },

        createCompetition: function() {
            const player = this.user('player', 'john', 'x');
            const bot = this.user('bot', 'bot', 'o');
            return { player, bot };
        },

        createTiles: function() {
            for (let i = 0; i < availableSquares.length; i++) {
                const tile = document.createElement('div');
                tile.classList.add('tiles');
                tile.id = i;
                container.appendChild(tile);
            }
        },

        addEventListeners: function() {
            container.addEventListener('click', (event) => {
                if (event.target === container) return;
                const clickedTile = event.target.closest('.tiles');

                this.updateSquare(clickedTile);
            });
        },

        updateSquare: function(currentTile) {
            const squareIndex = Array.prototype.indexOf.call(container.children, currentTile);

            if (availableSquares[squareIndex] === '') {
                availableSquares[squareIndex] = this.currentTurn.marker;
                currentTile.textContent = availableSquares[squareIndex];

                if (this.currentTurn === this.players.player) {
                    this.currentTurn = this.players.bot;
                } else {
                    this.currentTurn = this.players.player;
                }

                this.checkWin();
            } else {
                alert('You already picked that!');
                return null;
            }
        },

        checkWin: function() {
            const board = availableSquares.slice();

            for (const combination of winningCombinations) {
                if (this.checkCombination(combination, board)) {
                    alert(`${board[combination[0]]} is the Winner!`);
                    return 'Winner';
                }
            }

            if (board.every(cell => cell !== '')) {
                alert('It\'s a Draw!');
                return 'Draw';
            }

            return null;
        },

        checkCombination: function(combination, board) {
            const [a, b, c] = combination;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        }
    }

    gameBoard.init();
})();
