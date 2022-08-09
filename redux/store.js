import { configureStore } from "@reduxjs/toolkit";
import { setCategorySlice } from "./category/setCategorySlice";
import { feedbackSlice } from "./feedback/feedbackSlice";
import { fbDetailSlice } from "./fbDetail/fbDetailSlice";

export const store = configureStore({
    reducer: {
        feedback: feedbackSlice.reducer,
        category: setCategorySlice.reducer,
        details: fbDetailSlice.reducer
    },
})