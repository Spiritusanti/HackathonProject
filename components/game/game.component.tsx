// react imports
import { FC } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { GameActions } from "../../redux/game-reducer";
import { RootState } from "../../redux/store";
// component imports
import Opponent from "./Opponent";
import Player from "./Player";
import PlayerForm from "./PlayerForm";
import ScoreDisplay from './ScoreDisplay';
// style imports
import classes from '../../styles/game.module.css';

const GameComponent: FC = () => {
    const dispatch = useDispatch();
    const isPlaying = useSelector((state: RootState) => state.game.isPlaying)

    // match start handler
    const gameHandler = (): void => {
        dispatch(GameActions.decideWinner());
    }


    return (
        <section className={classes.game}>
            {!isPlaying && <PlayerForm />}
            {isPlaying && <div className={classes.game__controls}>
                <ScoreDisplay />
                <div className={classes.game__cards}>
                    <Player />
                    <Opponent />
                </div>
                <div className={classes.game__fightButton}><button onClick={gameHandler}>Fight!</button></div>
            </div>}
        </section>
    )
}

export default GameComponent;