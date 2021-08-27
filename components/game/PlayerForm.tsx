// react imports
import React, { FC, FormEvent, useState } from "react";
// redux imports
import { useDispatch } from "react-redux";
import { GameActions } from "../../redux/game-reducer";
// playerInput Interface Type
export interface playerInput {
    playerName: string,
    enteredRounds: number,
    enteredBackgroundColor: string
}

const PlayerForm: FC = () => {
    const [playerName, setPlayerName] = useState<string>('');
    const [numberOfRounds, setNumberOfRounds] = useState<number>(1);
    const [enteredBackground, setEnteredBackground] = useState<string>('#ccc');
    const [error, setError] = useState<string | boolean>(false);
    const dispatch = useDispatch()


    // onChange Handlers
    const playerNameHandler = (event: FormEvent<HTMLInputElement>): void => {
        setPlayerName(event.currentTarget.value)
    }

    const roundsHandler = (event: FormEvent<HTMLSelectElement>): void => {
        setNumberOfRounds(+event.currentTarget.value);
    }

    const backgroundHandler = (event: FormEvent<HTMLSelectElement>): void => {
        setEnteredBackground(event.currentTarget.value);
    }

    const resetInputs = (): void => {
        setPlayerName('');
        setEnteredBackground("#CCC");
        setNumberOfRounds(1);
        setError(false);
    }


    // submit Handler
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (playerName.trim().length === 0) {
            setError(true)
            return;
        }

        const userInput: playerInput = {
            playerName: playerName,
            enteredRounds: numberOfRounds,
            enteredBackgroundColor: enteredBackground,
        }
        dispatch(GameActions.setUserInfo(userInput));
        resetInputs();
    }


    return (
        <form onSubmit={submitHandler}>
            <h1>Set your options!</h1>
            <ul>
                <li>
                    <label htmlFor="playername">Add your name: </label>
                    <input type="text" id="playername" onChange={playerNameHandler} value={playerName} />
                    {error && <p style={{ color: 'red' }}>Please enter a name</p>}
                </li>
                <li>
                    <label htmlFor="rounds">Select number of rounds: </label>
                    <select name="rounds" id="rounds" onChange={roundsHandler} value={numberOfRounds}>
                        <option value="choose-option">Choose an option</option>
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="background-color">Choose your color: </label>
                    <select name="background-color" id="background-color" onChange={backgroundHandler} value={enteredBackground}>
                        <option value="choose-option">Choose an option</option>
                        <option value="#789DF5">#789DF5</option>
                        <option value="#0032A3">#0032A3</option>
                        <option value="#EBA707">#EBA707</option>
                        <option value="#FCF9F0">#FCF9F0</option>
                        <option value="#A38848">#A38848</option>
                    </select>
                </li>
            </ul>
            <button type="submit">Submit</button>
        </form>
    )
}

export default PlayerForm;