import { FC, useState, useEffect } from "react";
// component imports
import Opponent from "./Opponent";
import Player from "./Player";
import PlayerForm from "./PlayerForm";
import Win from "./Win";
import Lose from "./Lose";
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
    const [playerWin, setPlayerWin] = useState<boolean>(false);
    const [playerLose, setPlayerLose] = useState<boolean>(false);
    const [tie, setTie] = useState<boolean>(false);
    const [opponentChoice, setOpponentChoice] = useState<string>('')
    const [playerChoice, setPlayerChoice] = useState<string>('')
    const [startMatch, setStartMatch] = useState<boolean>(false);
    console.log(playerChoice, opponentChoice, playerWin, playerLose);

    useEffect(() => {
        const winLogic = () => {
            if (playerChoice === 'rock' && opponentChoice === 'scissors') {
                setPlayerWin(true);
            } else if (playerChoice === 'paper' && opponentChoice === 'rock') {
                setPlayerWin(true);
            } else if (playerChoice === 'scissors' && opponentChoice === 'paper') {
                setPlayerWin(true);
            } else if (playerChoice === opponentChoice) {
                setTie(true)
            } else {
                setPlayerLose(true)
            }
        }
        if (playerChoice !== '' && opponentChoice !== '') {
            winLogic();
        }
        return;
    }, [playerChoice, opponentChoice])

    // Dev toggle mode handler - remove before final launch
    const devToggleHandler = (): void => {
        setIsPlaying(!isPlaying);
    }

    // trigger match handler
    const triggerMatch = (): void => {
        setPlayerWin(false);
        setPlayerLose(false);
        setTie(false);
        setStartMatch(true);
    }
    const readyMatch = (): void => {
        setStartMatch(false)
    }
    // selection handlers for prop drilling!
    const opponentSelectionHandler = (selection: string): void => {
        setOpponentChoice(selection);
    }

    const playerSelectionHandler = (selection: string): void => {
        setPlayerChoice(selection)
    }
    return (
        <section>
            {!isPlaying && <PlayerForm />}
            {isPlaying && <div>
                <Player setSelection={playerSelectionHandler} />
                <Opponent startMatch={startMatch} endMatch={readyMatch} setSelection={opponentSelectionHandler} />
                <button onClick={triggerMatch}>Trigger Match</button>
            </div>}
            {playerWin && <Win />}
            {playerLose && <Lose />}
            {tie && <h1>its a tie!</h1>}
            <button onClick={devToggleHandler}>Toggle Mode for Dev</button>
        </section>
    )
}

export default GameComponent;