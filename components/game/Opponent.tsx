import { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import playerImage from '../../assests/xelor_by_yuejeancarlos19-d6mvio3.jpg';

interface opponentProps {
    startMatch: boolean,
    endMatch: () => void
}

const Opponent: FC<opponentProps> = (props) => {
    const [opponentChoice, setOpponentChoice] = useState<string>()

    useEffect(() => {
        if (!props.startMatch) {
            return
        }
        const randomOpponentSelection = () => {
            const moveOptions = ["rock", "paper", "scissors"]
            const randomChoice = Math.floor(Math.random() * moveOptions.length);
            setOpponentChoice(moveOptions[randomChoice]);
            console.log("opponent choice:", opponentChoice);
        };
        randomOpponentSelection();
        props.endMatch();
        return;
    }, [opponentChoice, props.startMatch, props.endMatch, props])

    return (
        <section>
            <div className="player-info">
                <h1>Oponent Name</h1>
                <Image src={playerImage} alt="oponent avatar" width={"250px"} height={"250px"} />
            </div>
        </section>
    )
}

export default Opponent;