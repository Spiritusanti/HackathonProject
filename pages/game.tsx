import type { NextPage } from 'next'
import { useState } from 'react';
import GameComponent from '../components/game/game.component';
import Header from '../components/header';

const Game: NextPage = () => {
    const [winner, setWinner] = useState<String | null>(null);

    let content;
    if (winner === "player") {
        content = <div>
            <h1>You win!</h1>
        </div>
    }
    if (winner === "cpu") {
        content = <div>
            <h1>You lose!</h1>
        </div>
    }
    if (winner === null) {
        content = <GameComponent />
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