"use client";
import React, { useEffect } from "react";
import { useAuth } from "services"; // Assuming you have an auth service
import { useDispatch } from "react-redux";
import { getCartItems } from "services";
import { setBulkCartItems, clearCartItems } from "store";

interface FireStoreWrapperProps {
  children: React.ReactNode;
}

const FireStoreWrapper: React.FC<FireStoreWrapperProps> = ({ children }) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const handleGetCartItems = async () => {
    const data = await getCartItems(auth.user.uid);
    dispatch(clearCartItems());
    if (data) {
      dispatch(setBulkCartItems(data));
    }
  };

  useEffect(() => {
    if (auth.user) {
      handleGetCartItems();
    }
  }, [auth.user, dispatch]);

  return <>{children}</>;
};

export default FireStoreWrapper;
