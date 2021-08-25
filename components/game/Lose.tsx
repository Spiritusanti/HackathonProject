import { FC } from "react";

interface LoseProps {
    reset: () => void
}

const Lose: FC<LoseProps> = (props) => {
    return (
        <section>
            <div>
                <h1>You Lost!</h1>
                <button onClick={props.reset}>Next Round!</button>
            </div>
        </section>
    )
}

export default Lose;