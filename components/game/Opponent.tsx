import { FC, useEffect, useState } from "react";
import Image from "next/image";
import playerImage from '../../assests/xelor_by_yuejeancarlos19-d6mvio3.jpg';

interface opponentProps {
    startMatch: boolean,
    endMatch: () => void,
    setSelection: (selection: string) => void
}

const Opponent: FC<opponentProps> = (props) => {
    const [opponentChoice, setOpponentChoice] = useState<string>('')

    useEffect(() => {
        if (!props.startMatch) {
            return
        }
        const randomOpponentSelection = () => {
            const moveOptions = ["rock", "paper", "scissors"]
            const randomChoice = Math.floor(Math.random() * moveOptions.length);
            setOpponentChoice(moveOptions[randomChoice]);
        };
        randomOpponentSelection();
        if (opponentChoice) {
            props.setSelection(opponentChoice)
        }

        props.endMatch();
        return;
    }, [props, opponentChoice])

    return (
        <section>
            <div className="player-info">
                <h1>Opponent Name</h1>
                <Image src={playerImage} alt="opponent avatar" width={"250px"} height={"250px"} />
            </div>
        </section>
    )
}

export default Opponent;