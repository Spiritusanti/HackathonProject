// react/nextjs imports
import { FC, FormEvent, useState } from "react";
import Image from 'next/image'
// redux imports
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { GameActions } from "../../redux/game-reducer";
// other imports
import playerImage from '../../assests/xelor_by_yuejeancarlos19-d6mvio3.jpg';
// style imports
import classes from '../../styles/game.module.css';



const Player: FC = () => {
    const [playerMove, setPlayerMove] = useState<string>('');
    const dispatch = useDispatch()
    const playerReady = useSelector((state: RootState) => state.game.playerReady);
    const playerName = useSelector((state: RootState) => state.game.playerName);

    // onChange Handler
    const onInputSelection = (event: FormEvent<HTMLInputElement>) => {
        setPlayerMove(event.currentTarget.value);
    }

    // submit handler
    const playerChoiceSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (playerMove === '') {
            return;
        }
        dispatch(GameActions.setMoves(playerMove));
    }


    // component content - render based on whether player has made a selection
    //  --> expand ready content to contain item picture 
    let content;
    if (playerReady) {
        content = <h1>Ready!</h1>
    } else {
        content = <form onSubmit={playerChoiceSubmitHandler} className={classes.player__input}>
            <h1>Choose your move!</h1>
            <ul>
                <li>
                    <label htmlFor="rock">Rock</label>
                    <input type="radio" name="player-choice" id="rock" value="rock" onChange={onInputSelection} />
                </li>
                <li>
                    <label htmlFor="paper">Paper</label>
                    <input type="radio" name="player-choice" id="paper" value="paper" onChange={onInputSelection} />
                </li>
                <li>
                    <label htmlFor="scissors">Scissors</label>
                    <input type="radio" name="player-choice" id="scissors" value="scissors" onChange={onInputSelection} />
                </li>
            </ul>
            <button type="submit">Ready!</button>
        </form>
    }
    return (
        <section className={classes.player}>
            <div className="player-info">
                <h1>{playerName}</h1>
                <Image src={`https://robohash.org/${playerName}`} alt="player avatar" width={"250px"} height={"250px"} />
            </div>
            {content}
        </section>
    )
}

export default Player;