import { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import playerImage from '../../assests/xelor_by_yuejeancarlos19-d6mvio3.jpg';

interface opponentProps {
    setSelection: (selection: string) => void
}

const Opponent: FC<opponentProps> = ({ setSelection }) => {
    const randomOpponentSelection = useCallback(() => {
        const moveOptions = ["rock", "paper", "scissors"]
        const randomChoice = Math.floor(Math.random() * moveOptions.length);
        setSelection(moveOptions[randomChoice])
    }, [setSelection]);


    useEffect(() => {
        randomOpponentSelection();
    }, [randomOpponentSelection]);



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