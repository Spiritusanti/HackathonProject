// react/nextjs imports
import type { NextPage } from 'next'
import { Fragment } from 'react';
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
    const scores = useSelector((state: RootState) => state.game.scores);
    const isPlaying = useSelector((state: RootState) => state.game.isPlaying);
    const dispatch = useDispatch()

    // next match handler
    const resetWinner = (): void => {
        dispatch(GameActions.nextRound());
    }

    // newGame Handler
    const newGame = (): void => {
        dispatch(GameActions.newGame());
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

    if (isPlaying && scores.player > scores.rounds / 2) {
        content = <Fragment>
            <h1>You are victoriuos!</h1>
            <button onClick={newGame}>Play again!</button>
        </Fragment>
    }
    if (isPlaying && scores.opponent > scores.rounds / 2) {
        content = <Fragment>
            <h1>You have been vanquished!</h1>
            <button onClick={newGame}>Play again!</button>
        </Fragment>
    }
    if (isPlaying && scores.rounds === 0 && scores.player === scores.opponent) {
        content = <Fragment>
            {/* add a sudden death mode? */}
            <h1>Its a tie! Nobody wins!</h1>
            <button onClick={newGame}>Play again!</button>
        </Fragment>
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