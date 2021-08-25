import { FC, useState, useEffect } from "react";
// component imports
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

interface GameComponentProps {
    winnerHandler: (result: string) => void;
}

const GameComponent: FC<GameComponentProps> = (props) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [opponentChoice, setOpponentChoice] = useState<string>('')
    const [playerChoice, setPlayerChoice] = useState<string>('')
    console.log(playerChoice, opponentChoice);

    // Dev toggle mode handler - remove before final launch
    const devToggleHandler = (): void => {
        setIsPlaying(!isPlaying);
    }

    // selection handlers for prop drilling!
    const opponentSelectionHandler = (selection: string): void => {
        setOpponentChoice(selection);
    }

    const playerSelectionHandler = (selection: string): void => {
        setPlayerChoice(selection)
    }

    // game logic onClick handler
    const gameHandler = () => {
        if (playerChoice === '' || opponentChoice === '') {
            return;
        }
        if (playerChoice === "rock" && opponentChoice === "scissors") {
            props.winnerHandler("player");
        } else if (playerChoice === "paper" && opponentChoice === "rock") {
            props.winnerHandler("player");
        }
        else if (playerChoice === "scissors" && opponentChoice === "paper") {
            props.winnerHandler("player");
        } else if (playerChoice === opponentChoice) {
            props.winnerHandler("tie");
        } else {
            props.winnerHandler('cpu')
        }
    }

    return (
        <section>
            {!isPlaying && <PlayerForm />}
            {isPlaying && <div>
                <Player setSelection={playerSelectionHandler} />
                <Opponent setSelection={opponentSelectionHandler} />
                <button onClick={gameHandler}>Fight!</button>
            </div>}
            <button onClick={devToggleHandler}>Toggle Mode for Dev</button>
        </section>
    )
}

export default GameComponent;