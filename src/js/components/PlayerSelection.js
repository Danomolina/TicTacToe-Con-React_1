import React, { useState } from 'react';

function PlayerSelection({ startGame }) {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [symbol, setSymbol] = useState('X');

    const handleSubmit = (e) => {
        e.preventDefault();
        startGame(player1, player2, symbol);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Pick A Weapon</h2>
            <div>
                <input
                    type="text"
                    placeholder="Player 1"
                    value={player1}
                    onChange={(e) => setPlayer1(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Player 2"
                    value={player2}
                    onChange={(e) => setPlayer2(e.target.value)}
                />
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="X"
                        checked={symbol === 'X'}
                        onChange={(e) => setSymbol(e.target.value)}
                    />
                    X
                </label>
                <label>
                    <input
                        type="radio"
                        value="O"
                        checked={symbol === 'O'}
                        onChange={(e) => setSymbol(e.target.value)}
                    />
                    O
                </label>
            </div>
            <button type="submit">Start Game</button>
        </form>
    );
}

export default PlayerSelection;

