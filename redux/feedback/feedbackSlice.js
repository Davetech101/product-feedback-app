import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState"

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        createFeedback: (state, action) => {
            const newState = {...state, feedbacks: [...state.feedbacks, action.payload]}
            return newState
        }
    }
})

export const { createFeedback } = feedbackSlice.actions