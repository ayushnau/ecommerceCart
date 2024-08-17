"use client";
import React, { useState } from "react";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { clearCartItems, StoreState } from "store";
import OrderConfirmationModal from "../../misc/OrderConfirmtionModal";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const CardList: React.FC = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: StoreState) => {
    return state.cartItemsSlice.items;
  });
  if (!cartItems || Object.keys(cartItems).length == 0) {
    router.push("/listing");
  }
  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);
  const generateOrderNumber = (): string => {
    const timestamp = Date.now();
    const randomPart = Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
    return `${timestamp}-${randomPart}`;
  };

  return (
    <div>
      {Object.values(cartItems).map((value: any) => {
        return (
          <CartCard key={`${value.id}${value.title}`} cardDetails={value} />
        );
      })}
      <div
        onClick={() => setShowConfirmationModal(true)}
        className="ml-auto py-4 px-4 shadow-boxShadow flex items-center justify-end"
      >
        <button className="bg-[#fb641b] rounded px-5 py-2 text-white shadow-boxShadow text-lg font-bold">
          Place order
        </button>
      </div>
      {showConfirmationModal ? (
        <OrderConfirmationModal
          isOpen={showConfirmationModal}
          onClose={() => {
            dispatch(clearCartItems());
            setShowConfirmationModal(false);
          }}
          onContinueShopping={() => {
            dispatch(clearCartItems());
            router.push("/listing");
          }}
          orderNumber={generateOrderNumber()}
        />
      ) : null}
    </div>
  );
};

export default CardList;
