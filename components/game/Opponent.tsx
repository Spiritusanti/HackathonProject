import { FC } from "react";
import Image from "next/image";
import playerImage from '../../assests/xelor_by_yuejeancarlos19-d6mvio3.jpg';

const Opponent: FC = () => {
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