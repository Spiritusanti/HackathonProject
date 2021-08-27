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
/*
Need to build in form for user to select rounds and then either Rock, Paper, or Scissors
    --> allow user to add username, select avatar, and add background theme
    --> set CPU background to complementary color base on user input
need to build bisected game component that shows user selection vs CPU selection
then trigger animation based on result of match up
--> need to keep track of scores for both CPU and Player
--> once either wins a majority of rounds - trigger win/loss animation for player
--> after a timeout add option to play again or quit.
*/


const GameComponent: FC = () => {
    const dispatch = useDispatch();
    const isPlaying = useSelector((state: RootState) => state.game.isPlaying)
    console.log(isPlaying);

    // match start handler
    const gameHandler = (): void => {
        dispatch(GameActions.decideWinner());
    }


    return (
        <section>
            {!isPlaying && <PlayerForm />}
            {isPlaying && <div>
                <ScoreDisplay />
                <Player />
                <Opponent />
                <button onClick={gameHandler}>Fight!</button>
            </div>}
        </section>
    )
}

export default GameComponent;