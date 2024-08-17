"use client";
import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useSelector, useDispatch } from "react-redux";
import { StoreState, setCartItem } from "store";
import { formatNumber } from "utils";

interface CartCardInterface {
  cardDetails: any;
}

const CartCard: React.FC<CartCardInterface> = ({ cardDetails }) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<any>(
    cardDetails.images[0]
  );
  const currentQuantity = useSelector((state: StoreState) => {
    const id: string = cardDetails.id;
    return state.cartItemsSlice[id]?.quantity;
  });

  const handleQuantityChange = (value: "add" | "remove") => {
    const id: string = cardDetails.id;
    const quantity = currentQuantity ?? "0";
    const addOrDeduct = value == "add" ? 1 : -1;
    console.log({ quantity, value, addOrDeduct });
    console.log("asdfasdfa", {
      ...cardDetails,
      id,
      quantity23456654: `${parseInt(quantity) + addOrDeduct}`,
    });

    dispatch(
      setCartItem({
        id,
        ...cardDetails,
        quantity: `${parseInt(quantity) + addOrDeduct}`,
      })
    );
  };
  return (
    <div className="flex items-center p-4 border-b border-gray-200 w-[600px]">
      <div className="flex-shrink-0">
        <Image
          src={selectedImage}
          width={200}
          height={400}
          alt={cardDetails.title}
          className="object-fill"
        />
      </div>
      <div className="ml-4 flex-grow">
        <div className="text-base font-medium text-gray-900">
          {cardDetails.title}
        </div>
        <div className="text-xs text-gray-600">{cardDetails.brand}</div>
        <div className="mt-1 flex items-center">
          <span className="text-base font-medium text-gray-900">
            ₹{formatNumber(cardDetails.price)}
          </span>
          <span className="mx-2 line-through text-gray-500 text-sm">
            ₹
            {formatNumber(
              (
                (+cardDetails.price / (100 - +cardDetails.discountPercentage)) *
                100
              ).toFixed(1)
            )}
          </span>
          <span className="text-green-600 text-xs font-medium">
            {cardDetails.discountPercentage}% Off
          </span>
        </div>
        <div className="text-xs text-gray-500 mt-2">Saver Deal</div>
        <div className="flex items-center mt-4">
          <button
            onClick={() => handleQuantityChange("remove")}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 text-sm font-medium rounded-l hover:bg-gray-300"
          >
            -
          </button>
          <span className="w-16 h-8 flex items-center justify-center bg-gray-100 text-gray-900 text-sm font-medium">
            {currentQuantity}
          </span>
          <button
            onClick={() => {
              handleQuantityChange("add");
            }}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 text-sm font-medium rounded-r hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
