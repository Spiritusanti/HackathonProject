import { FC } from "react";
import Nav from "./nav";

const Header: FC = () => {
    return (
        <section>
            <div>
                <h1>Rock Paper Scissors</h1>
            </div>
            <Nav />
        </section>
    )
}

export default Header;