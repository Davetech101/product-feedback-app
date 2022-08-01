import { configureStore } from "@reduxjs/toolkit";
import { setCategorySlice } from "./category/setCategorySlice";
import { feedbackSlice } from "./feedback/feedbackSlice";

export const store = configureStore({
    reducer: {
        feedback: feedbackSlice.reducer,
        category: setCategorySlice.reducer
    },
})