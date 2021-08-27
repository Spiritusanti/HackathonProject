import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./game-reducer";

export const store = configureStore({
  reducer: {
    game: GameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
