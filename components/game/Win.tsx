import { FC } from "react";

interface WinProps {
    reset: () => void
}

const Win: FC<WinProps> = (props) => {
    return (
        <section>
            <div>
                <h1>You Win!</h1>
                <button onClick={props.reset}>Next round!</button>
            </div>
        </section>
    )
}

export default Win;