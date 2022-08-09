import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const fbDetailSlice = createSlice({
    name: "fbDetail",
    initialState,
    reducers: {
        fbDetail: (state, action) => {
            const newState =  {details: action.payload}
            return newState
        }
    }
})

export const { fbDetail } = fbDetailSlice.actions