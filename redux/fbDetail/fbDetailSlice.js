import { createSlice } from "@reduxjs/toolkit";

const initialState = ""

export const fbDetailSlice = createSlice({
    name: "fbDetail",
    initialState,
    reducers: {
        fbDetail: (state, action) => {
            console.log(state, action.payload);
        }
    }
})

export const { fbDetail } = fbDetailSlice.actions