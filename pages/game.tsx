import type { NextPage } from 'next'
import { useState } from 'react';
import GameComponent from '../components/game/game.component';
import Win from '../components/game/Win';
import Lose from '../components/game/Lose';
import Header from '../components/header';

const Game: NextPage = () => {
    const [winner, setWinner] = useState<String | null>(null);

    // winner handler
    const winnerHandler = (result: string): void => {
        setWinner(result);
    }

    // next match handler
    const resetWinner = (): void => {
        setWinner(null);
    }

    let content;
    if (winner === "player") {
        content = <div>
            <Win reset={resetWinner} />
        </div>
    }
    if (winner === "cpu") {
        content = <div>
            <Lose reset={resetWinner} />
        </div>
    }
    if (winner === 'tie') {
        content = <div>
            <h1>Its a tie!</h1>
            <button onClick={resetWinner}>Next Round!</button>
        </div>
    }
    if (winner === null) {
        content = <GameComponent winnerHandler={winnerHandler} />
    }

    return (
        <article>
            <Header />
            <div>
                {content}
            </div>
        </article>

    );
}

export default Game;