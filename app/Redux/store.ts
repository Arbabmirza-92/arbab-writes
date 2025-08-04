// redux/store.ts

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Apislice"; 

import { counterSlice } from "./CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [api.reducerPath]: api.reducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Optional: types for hooks (if you're using TypeScript with useDispatch/useSelector)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;