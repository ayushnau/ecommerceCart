import { configureStore, combineReducers } from "@reduxjs/toolkit";
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


//publication
import publicationUserSlice from "./src/publication/publicationUserSlice";
import cartItemsSlice from './src/cartItemsSlice'

let reducers = combineReducers({
	cartItemsSlice,
	publicationUserSlice,
});

const persistConfig = {
	key: "root",
	storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const webStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type StoreState = ReturnType<typeof reducers>;

const webPersistor = persistStore(webStore);

export { webStore, webPersistor };
