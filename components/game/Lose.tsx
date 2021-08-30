import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import classes from '../../styles/game.module.css'

interface LoseProps {
    reset: () => void
}

const Lose: FC<LoseProps> = (props) => {
    const opponentMove = useSelector((state: RootState) => state.game.opponentMove)
    const playerMove = useSelector((state: RootState) => state.game.playerMove)
    return (
        <section >
            <div className={classes.result__display}>
                <h1>You Lost!</h1>
                <p>{`
                    your move: ${playerMove} vs Computer-san's move: ${opponentMove}
                    `}</p>
                <button onClick={props.reset}>Next Round!</button>
            </div>
        </section>
    )
}

export default Lose;