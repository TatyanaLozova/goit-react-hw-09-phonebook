import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from "redux-logger";
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
// import persistReducer from 'redux-persist/es/persistReducer';
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contacts/contacts-reducer";
import  authReducer from "./auth/auth-reducer";
// // удаляем persistStore

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions:
        [FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
     auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
   
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);



// eslint-disable-next-line import/no-anonymous-default-export
export default  {store, persistor};
