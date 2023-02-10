import { configureStore } from "@reduxjs/toolkit";
import modalreducer from "./reducers/modalreducer";

export const store = configureStore({
    reducer: {
        modal: modalreducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch