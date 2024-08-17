"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
  onContinueShopping?: () => void;
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isOpen,
  onClose,
  orderNumber,
  onContinueShopping,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-primary-text-black opacity-50"
        onClick={onClose}
      />

      <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-secondary-gray  text-3xl"
        >
          &times;
        </button>
        <h2 className="text-2xl pt-6 font-bold mb-4">
          Order Placed Successfully!
        </h2>
        <div className="text-lg mb-4">
          <p>Thank you for your purchase!</p>
          <p className="font-semibold text-sm">
            Order Number: <span className="text-lg">{orderNumber}</span>
          </p>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={onContinueShopping}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex-1"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default OrderConfirmationModal;
