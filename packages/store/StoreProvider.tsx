"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { webStore, webPersistor } from "./store";

// Create an instance of the Inter font

// Define the StoreProvider component
export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={webStore}>
      <PersistGate loading={null} persistor={webPersistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
