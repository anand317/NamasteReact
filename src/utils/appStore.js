import { configureStore } from "@reduxjs/toolkit"
import CardSlice from "./cardSlice";

const appStore=configureStore({
    reducer: {
        card:CardSlice,
    },
})

export default appStore;