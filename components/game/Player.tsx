import { FC, FormEvent, useRef, useState } from "react";
import Image from 'next/image'
import playerImage from '../../assests/xelor_by_yuejeancarlos19-d6mvio3.jpg';

const Player: FC = () => {
    const [playerMove, setPlayerMove] = useState<string>();

    // onChange Handler
    const onInputSelection = (event: FormEvent<HTMLInputElement>) => {
        setPlayerMove(event.currentTarget.value);
    }

    // submit handler
    const playerChoiceSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(playerMove);
    }
    return (
        <section>
            <div className="player-info">
                <h1>Player Name</h1>
                <Image src={playerImage} alt="player avatar" width={"250px"} height={"250px"} />
            </div>
            <form onSubmit={playerChoiceSubmitHandler}>
                <h1>Choose your move!</h1>
                <div>
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
                </div>
                <button type="submit">Ready!</button>
            </form>
        </section>
    )
}

export default Player;