"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { StoreState, setCartItem, removeCartItem } from "store";
import { formatNumber } from "utils";
import { ConfirmationModal } from "components";

interface CartCardInterface {
  cardDetails: any;
}

const CartCard: React.FC<CartCardInterface> = ({ cardDetails }) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<any>(
    cardDetails.images[0]
  );
  const [isConfirmationModalOpen, setIsConfirmationModal] =
    useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const currentQuantity = useSelector((state: StoreState) => {
    const id: string = cardDetails.id;
    return state.cartItemsSlice.items[id]?.quantity;
  });

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id: string = cardDetails.id;
    const value = e.target.value;

    if (/^\d+$/.test(value) && parseInt(value) > 0) {
      setError(null);
      dispatch(
        setCartItem({
          id,
          ...cardDetails,
          quantity: value,
        })
      );
    } else if (value === "") {
      setError("Quantity cannot be lesser than 1.");
      dispatch(
        setCartItem({
          id,
          ...cardDetails,
          quantity: "1",
        })
      );
    } else {
      setError("Please enter a digit between 1 and 9.");
    }
  };

  const handleRemoveItem = () => {
    const id: string = cardDetails.id;
    dispatch(removeCartItem(id));
  };

  return (
    <div className="flex items-center flex-col lg:flex-row p-4 border-b border-gray-200 w-full lg:w-[600px]">
      <div className="flex-shrink-0">
        <Image
          src={selectedImage}
          width={200}
          height={400}
          alt={cardDetails.title}
          className="object-contain"
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
            onClick={() =>
              handleQuantityChange({
                target: {
                  value: `${parseInt(currentQuantity) - 1}`,
                },
              } as any)
            }
            className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 text-sm font-medium rounded-l hover:bg-gray-300"
          >
            -
          </button>
          <input
            type="text"
            value={currentQuantity}
            onChange={handleQuantityChange}
            className="w-16 h-8 flex items-center justify-center bg-gray-100 text-gray-900 text-sm font-medium text-center outline-none"
          />
          <button
            onClick={() =>
              handleQuantityChange({
                target: {
                  value: `${parseInt(currentQuantity) + 1}`,
                },
              } as any)
            }
            className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 text-sm font-medium rounded-r hover:bg-gray-300"
          >
            +
          </button>
          <button
            onClick={() => setIsConfirmationModal(true)}
            className="ml-4 w-24 h-8 flex items-center justify-center bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
        {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
        {isConfirmationModalOpen && (
          <ConfirmationModal
            onConfirm={handleRemoveItem}
            onCancel={() => setIsConfirmationModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default CartCard;
