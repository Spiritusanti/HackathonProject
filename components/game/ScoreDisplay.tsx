// react imports
import { FC } from "react";
// redux imports
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ScoreDisplay: FC = () => {
    const { rounds, player, opponent } = useSelector((state: RootState) => state.game.scores);
    return (
        <div>
            <h1>Scoreboard</h1>
            <ul>
                <li>
                    <label htmlFor="rounds-remaining">Rounds Remaining: </label>
                    <h1 id="rounds-remaining">{rounds}</h1>
                </li>
                <li>
                    <label htmlFor="player-score">Player: </label>
                    <h1 id="player-score">{player}</h1>
                </li>
                <li>
                    <label htmlFor="opponent-score">Opponent: </label>
                    <h1 id="opponent-score">{opponent}</h1>
                </li>
            </ul>
        </div>
    )
}

export default ScoreDisplay;