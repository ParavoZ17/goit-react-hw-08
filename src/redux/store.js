
import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contacts/slice";
import filtersSlice from "./filters/slice";
import authReducer from "./auth/slice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "authSlice",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsSlice,
    filter: filtersSlice,
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),    
});

export const persistor = persistStore(store);

