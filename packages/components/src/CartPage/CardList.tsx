"use client";

import React, { useState } from "react";
import CartCard from "./CartCard";
import { useSelector, useDispatch } from "react-redux";
import { clearCartItems, StoreState } from "store";
import OrderConfirmationModal from "../../misc/OrderConfirmtionModal";
import LoginPromptModal from "../../misc/LoginPromptModal";
import { useRouter } from "next/navigation";
import { clearCart, useAuth } from "services";

const CardList: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useAuth();
  const cartItems = useSelector(
    (state: StoreState) => state.cartItemsSlice.items
  );

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showLoginPromptModal, setShowLoginPromptModal] = useState(false);

  if (!cartItems || Object.keys(cartItems).length === 0) {
    router.push("/listing");
    return null;
  }

  const generateOrderNumber = (): string => {
    const timestamp = Date.now();
    const randomPart = Math.floor(100000 + Math.random() * 900000);
    return `${timestamp}-${randomPart}`;
  };

  const handlePlaceOrderClick = () => {
    if (!auth.user) {
      setShowLoginPromptModal(true);
    } else {
      setShowConfirmationModal(true);
    }
  };

  return (
    <div>
      {Object.values(cartItems).map((value: any) => (
        <CartCard key={`${value.id}${value.title}`} cardDetails={value} />
      ))}
      <div
        onClick={handlePlaceOrderClick}
        className="ml-auto py-4 px-4 shadow-boxShadow flex items-center justify-end"
      >
        <button className="bg-[#fb641b] rounded px-5 py-2 text-white shadow-boxShadow text-lg font-bold">
          Place order
        </button>
      </div>
      {showConfirmationModal && (
        <OrderConfirmationModal
          isOpen={showConfirmationModal}
          onClose={() => {
            dispatch(clearCartItems());
            setShowConfirmationModal(false);
            clearCart(auth.user.uid);
          }}
          onContinueShopping={() => {
            dispatch(clearCartItems());
            clearCart(auth.user.uid);
            router.push("/listing");
          }}
          orderNumber={generateOrderNumber()}
        />
      )}
      {showLoginPromptModal && (
        <LoginPromptModal
          isOpen={showLoginPromptModal}
          onClose={() => setShowLoginPromptModal(false)}
        />
      )}
    </div>
  );
};

export default CardList;
