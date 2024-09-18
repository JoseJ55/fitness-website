import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { trainers } from "../../Contants";

import { TrainerState } from "./types";

const initialState: TrainerState = {
    current_trainer: 0,
    trainers: trainers,
}

export const trainersSlice = createSlice({
    name: 'trainers',
    initialState,
    reducers: {
        setCurrentTrainer: (state, action: PayloadAction<number>) => {
            state.current_trainer = action.payload;
        }
    }
});

export const { setCurrentTrainer } = trainersSlice.actions;
export const trainersReducer = trainersSlice.reducer;