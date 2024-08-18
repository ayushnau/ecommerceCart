"use client";

import React from "react";
import { createPortal } from "react-dom";

interface LoginPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPromptModal: React.FC<LoginPromptModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-primary-text-black opacity-50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-secondary-gray text-3xl"
        >
          &times;
        </button>
        <h2 className="text-2xl pt-6 font-bold mb-4">Please Log In</h2>
        <div className="text-lg mb-4">
          <p>You need to be logged in to complete this action.</p>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default LoginPromptModal;
