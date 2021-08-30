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
      state.scores.rounds = userInput.enteredRounds;
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
        if (state.scores.player > state.scores.opponent) {
          state.winner = "player";
        } else {
          state.winner = "cpu";
        }
      }
      if (state.playerMove === "rock" && state.opponentMove === "scissors") {
        state.winner = "player";
        state.scores = {
          ...state.scores,
          rounds: state.scores.rounds - 1,
          player: state.scores.player + 1,
        };
      } else if (
        state.playerMove === "paper" &&
        state.opponentMove === "rock"
      ) {
        state.winner = "player";
        state.scores = {
          ...state.scores,
          rounds: state.scores.rounds - 1,
          player: state.scores.player + 1,
        };
      } else if (
        state.playerMove === "scissors" &&
        state.opponentMove === "paper"
      ) {
        state.winner = "player";
        state.scores = {
          ...state.scores,
          rounds: state.scores.rounds - 1,
          player: state.scores.player + 1,
        };
      } else if (state.playerMove === state.opponentMove) {
        state.winner = "tie";
        state.scores = { ...state.scores, rounds: state.scores.rounds - 1 };
      } else {
        state.winner = "cpu";
        state.scores = {
          ...state.scores,
          rounds: state.scores.rounds - 1,
          opponent: state.scores.opponent + 1,
        };
      }
    },
    nextRound: (state) => {
      state.winner = null;
      state.playerReady = false;
      state.playerMove = "";
      state.opponentMove = "";
    },
    newGame: (state) => {
      state.isPlaying = false;
      state.winner = null;
      state.playerReady = false;
      state.playerMove = "";
      state.opponentMove = "";
      state.scores = { player: 0, opponent: 0, rounds: 1 };
    },
  },
});

export const GameActions = GameSlice.actions;

export default GameSlice;
