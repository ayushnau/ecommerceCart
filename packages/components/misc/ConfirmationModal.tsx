"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClose = () => {
    setIsMounted(false);
    setTimeout(onCancel, 400); // Delay unmounting to allow animation
  };

  return createPortal(
    <div
      className={`fixed inset-0 flex items-center justify-center bg-primary-text-black bg-opacity-50 z-50 transition-transform duration-400 ${
        isMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white rounded-lg p-6 w-80">
        <div className="text-center">
          <h2 className="text-lg font-medium">Remove Item</h2>
          <p className="mt-2 text-sm text-secondary-text-gray">
            Are you sure you want to remove this item from your cart?
          </p>
        </div>
        <div className=" flex justify-center gap-4 mt-6">
          <button
            onClick={() => {
              setIsMounted(false);
              setTimeout(onConfirm, 400);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex-1"
          >
            Yes
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 flex-1"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmationModal;
