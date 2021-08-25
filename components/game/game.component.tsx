import { FC, useState } from "react";
import Opponent from "./Opponent";
import Player from "./Player";
import PlayerForm from "./PlayerForm";
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
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    // Dev toggle mode handler - remove before final launch
    const devToggleHandler = (): void => {
        setIsPlaying(!isPlaying);
    }
    return (
        <section>
            {!isPlaying && <PlayerForm />}
            {isPlaying && <div>
                <Player />
                <Opponent />
            </div>}
            <button onClick={devToggleHandler}>Toggle Mode for Dev</button>
        </section>
    )
}

export default GameComponent;