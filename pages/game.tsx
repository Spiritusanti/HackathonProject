// react/nextjs imports
import type { NextPage } from 'next'
import Head from 'next/head';
// redux imports
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header';
import { RootState } from '../redux/store';
import { GameActions } from '../redux/game-reducer';
// component imports
import GameComponent from '../components/game/game.component';
import Win from '../components/game/Win';
import Lose from '../components/game/Lose';
import ScoreDisplay from '../components/game/ScoreDisplay';
// style imports
import classes from '../styles/game.module.css';




const Game: NextPage = () => {
    const winner = useSelector((state: RootState) => state.game.winner);
    const scores = useSelector((state: RootState) => state.game.scores);
    const isPlaying = useSelector((state: RootState) => state.game.isPlaying);
    const playerMove = useSelector((state: RootState) => state.game.playerMove);
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
        content = <div className={classes.result__display}>
            <h1>Its a tie!</h1>
            <p>{`You both chose ${playerMove}`}</p>
            <button onClick={resetWinner}>Next Round!</button>
        </div>
    }
    if (winner === null) {
        content = <GameComponent />
    }

    if (isPlaying && scores.player > scores.opponent + scores.rounds) {
        content = <div className={classes.results}>
            <h1>You are victoriuos!</h1>
            <ScoreDisplay />
            <button onClick={newGame}>Play again!</button>
        </div>
    }
    if (isPlaying && scores.opponent > scores.player + scores.rounds) {
        content = <div className={classes.results}>
            <h1>You have been vanquished!</h1>
            <ScoreDisplay />
            <button onClick={newGame}>Play again!</button>
        </div>
    }
    if (isPlaying && scores.rounds === 0 && scores.player === scores.opponent) {
        content = <div className={classes.results}>
            {/* add a sudden death mode? */}
            <h1>Its a tie! Nobody wins!</h1>
            <ScoreDisplay />
            <button onClick={newGame}>Play again!</button>
        </div>
    }

    return (
        <article>
            <Header />
            <div className={classes.game__container}>
                {content}
            </div>
        </article>

    );
}

export default Game;