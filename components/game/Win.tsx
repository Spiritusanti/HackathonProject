import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import classes from '../../styles/game.module.css'
interface WinProps {
    reset: () => void
}

const Win: FC<WinProps> = (props) => {
    const opponentMove = useSelector((state: RootState) => state.game.opponentMove)
    const playerMove = useSelector((state: RootState) => state.game.playerMove)
    return (
        <section className={classes.result__display}>
            <div>
                <h1>You Win!</h1>
                <p>{`
                    your move: ${playerMove} vs Computer-san's move: ${opponentMove}
                    `}</p>
                <button onClick={props.reset}>Next round!</button>
            </div>
        </section>
    )
}

export default Win;