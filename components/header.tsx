// react/next imports
import { FC } from "react";
// component imports
import Nav from "./nav";
// style imports
import classes from '../styles/landingPage.module.css';

const Header: FC = () => {
    return (
        <section className={classes.header}>
            <div className={classes.title}>
                <h1>Rock Paper Scissors</h1>
            </div>
            <Nav />
        </section>
    )
}

export default Header;