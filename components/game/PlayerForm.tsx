// react imports
import React, { FC, FormEvent, useState, Fragment, useEffect } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { GameActions } from "../../redux/game-reducer";
import { RootState } from "../../redux/store";
// style imports
import classes from '../../styles/game.module.css';

// playerInput Interface Type
export interface playerInput {
    playerName: string,
    enteredRounds: number,
}

const PlayerForm: FC = () => {
    const [playerName, setPlayerName] = useState<string>('');
    const [numberOfRounds, setNumberOfRounds] = useState<number>(1);
    const [error, setError] = useState<string | boolean>(false);
    const storedPlayerName = useSelector((state: RootState) => state.game.playerName)
    const dispatch = useDispatch()


    useEffect(() => {
        if (storedPlayerName) {
            setPlayerName(storedPlayerName);
        }
    }, [storedPlayerName])

    // onChange Handlers
    const playerNameHandler = (event: FormEvent<HTMLInputElement>): void => {
        setPlayerName(event.currentTarget.value)
    }

    const roundsHandler = (event: FormEvent<HTMLSelectElement>): void => {
        setNumberOfRounds(+event.currentTarget.value);
    }

    const resetInputs = (): void => {
        setPlayerName('');
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
        }
        dispatch(GameActions.setUserInfo(userInput));
        resetInputs();
    }


    return (
        <form className={classes.input_form} onSubmit={submitHandler}>
            <h1>Set your options!</h1>
            <ul>
                <li>
                    {storedPlayerName === '' ? <Fragment>
                        <label htmlFor="playername">Add your name: </label>
                        <input type="text" id="playername" onChange={playerNameHandler} value={playerName} />
                    </Fragment>
                        : <Fragment><label htmlFor="storedPlayer">Player: </label> <h1>{storedPlayerName}</h1></Fragment>
                    }
                    {error && <p style={{ color: 'red' }}>Please enter a name</p>}
                </li>
                <li>
                    <label htmlFor="rounds">Number of rounds: </label>
                    <select name="rounds" id="rounds" onChange={roundsHandler} value={numberOfRounds}>
                        <option value="choose-option">Choose an option</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="6">7</option>
                        <option value="9">9</option>
                    </select>
                </li>
            </ul>
            <button type="submit">Submit</button>
        </form>
    )
}

export default PlayerForm;