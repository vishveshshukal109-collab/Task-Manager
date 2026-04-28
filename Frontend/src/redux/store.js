import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import { persistReducer, persistStore } from "redux-persist"

// 🔥 manual storage (100% working)
const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => {
    localStorage.setItem(key, value)
    return Promise.resolve(true)
  },
  removeItem: (key) => {
    localStorage.removeItem(key)
    return Promise.resolve()
  },
}

const rootReducer = combineReducers({
  user: userReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)