import { FC } from "react";
import Image from "next/image";
import classes from '../../styles/game.module.css';

const Opponent: FC = () => {
    return (
        <section>
            <div className={classes.player}>
                <h1>Computer-san</h1>
                <Image src={"https://robohash.org/computersan"} alt="opponent avatar" width={"250px"} height={"250px"} />
                <h1>Praying to RNGesus!</h1>
            </div>
        </section>
    )
}

export default Opponent;