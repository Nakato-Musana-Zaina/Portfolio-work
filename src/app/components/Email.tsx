
import React from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Contact Me</h2>
        <p className="text-lg text-center">You can reach me at:</p>
        <p className="text-lg font-medium text-center mt-2">
          <a href="mailto:nakatozainamusan@gmail.com" className="text-blue-600 hover:underline">
            nakatozainamusan@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Modal;
