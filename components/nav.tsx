import { FC } from "react";
import Link from 'next/link';
import classes from '../styles/landingPage.module.css';

const Nav: FC = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
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