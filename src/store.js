import { createStore, combineReducers } from "redux";
import { todos } from "./redux/reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  todos, 
});

const persistConfig = {
  key: "root",
  storage,
  whitelist:["todos"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function makeStore(){
  return configureStore({
    reducer: persistedReducer
  })
}

export const store = makeStore();
export const persistor = persistStore(store);

// export const configureStore = () => {
//   const store = createStore(
//     persistedReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//   return store;
// };


