import { createSlice } from "@reduxjs/toolkit";

const initialState = "All"

export const setCategorySlice = createSlice({
    name: "setCategory",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            console.log(state, action.payload);
            return state = action.payload
        }
    }
})

export const { setCategory } = setCategorySlice.actions