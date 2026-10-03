import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, counterSlice.reducer);

export const store = configureStore({
    reducer: {
        counter: persistedReducer
    }
});

export const persistor = persistStore(store);