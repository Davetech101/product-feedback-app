import { createSlice } from "@reduxjs/toolkit";

const initialState = "All"

export const setCategorySlice = createSlice({
    name: "setCategory",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            return state = action.payload
        }
    }
})

export const { setCategory } = setCategorySlice.actions