import { FC } from "react";

const Nav: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/game">Play</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;