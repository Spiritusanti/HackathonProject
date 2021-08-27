import { createSlice } from "@reduxjs/toolkit";

// interface types for more complex state slices
export interface score {
  player: number;
  opponent: number;
  rounds: number;
}

export interface playerInput {
  playerName: string;
  enteredRounds: number;
  enteredBackgroundColor: string;
}

// interface for full game state
interface GameState {
  winner: string | null;
  scores: score;
  playerMove: string;
  playerReady: boolean;
  isPlaying: boolean;
  opponentMove: string;
  playerName: string;
  numberOfRounds: number;
  enteredBackground: string;
}
// contains all state needed for game to work
const initialState: GameState = {
  winner: null,
  scores: { player: 0, opponent: 0, rounds: 1 },
  playerMove: "",
  opponentMove: "",
  playerReady: false,
  isPlaying: false,
  playerName: "",
  numberOfRounds: 1,
  enteredBackground: "#ccc",
};
// GameSlice redux setup
const GameSlice = createSlice({
  name: "Game",
  initialState,
  reducers: {
    //   sets user info after form input and signals player ready!
    setUserInfo: (state, action) => {
      const userInput: playerInput = action.payload;
      state.playerName = userInput.playerName;
      state.numberOfRounds = userInput.enteredRounds;
      state.enteredBackground = userInput.enteredBackgroundColor;
      state.isPlaying = true;
    },
    // determines opponent move based on Math.random() after user selects move.
    setMoves: (state, action) => {
      const randomOpponentSelection = () => {
        const moveOptions = ["rock", "paper", "scissors"];
        const randomChoice = Math.floor(Math.random() * moveOptions.length);
        return moveOptions[randomChoice];
      };
      const playerMove = action.payload;
      const opponentMove = randomOpponentSelection();
      state.playerReady = true;
      state.playerMove = playerMove;
      state.opponentMove = opponentMove;
    },
    // logic to determine winner of a single match.
    decideWinner: (state) => {
      if (state.playerMove === "" || state.opponentMove === "") {
        return;
      }
      if (state.scores.rounds === 0) {
      }
      if (state.playerMove === "rock" && state.opponentMove === "scissors") {
        state.winner = "player";
        state.scores = {
          ...state.scores,
          rounds: state.scores.rounds--,
          player: state.scores.player++,
        };
      } else if (
        state.playerMove === "paper" &&
        state.opponentMove === "rock"
      ) {
        state.winner = "player";
        state.scores = {
          ...state.scores,
          rounds: state.scores.rounds--,
          player: state.scores.player++,
        };
      } else if (
        state.playerMove === "scissors" &&
        state.opponentMove === "paper"
      ) {
        state.winner = "player";
        state.scores = {
          ...state.scores,
          rounds: state.scores.rounds--,
          player: state.scores.player++,
        };
      } else if (state.playerMove === state.opponentMove) {
        state.winner = "tie";
        state.scores = { ...state.scores, rounds: state.scores.rounds-- };
      } else {
        state.winner = "cpu";
        state.scores = {
          ...state.scores,
          rounds: state.scores.rounds--,
          opponent: state.scores.opponent++,
        };
      }
    },
    nextRound: (state) => {
        state.winner = null;
    }
  },
});

export const GameActions = GameSlice.actions;

export default GameSlice;
