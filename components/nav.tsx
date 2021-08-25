import { FC } from "react";
import Link from 'next/link';

const Nav: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/game">Play</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;