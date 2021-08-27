// react/nextjs imports
import type { NextPage } from 'next'
import { useState } from 'react';
// redux imports
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header';
import { RootState } from '../redux/store';
import { GameActions } from '../redux/game-reducer';
// component imports
import GameComponent from '../components/game/game.component';
import Win from '../components/game/Win';
import Lose from '../components/game/Lose';





const Game: NextPage = () => {
    const winner = useSelector((state: RootState) => state.game.winner);
    const dispatch = useDispatch()


    // next match handler
    const resetWinner = (): void => {
        dispatch(GameActions.nextRound);
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