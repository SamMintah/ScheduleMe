import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const Icon = type === 'success' ? CheckCircle : XCircle;

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-md shadow-lg flex items-center`}>
      <Icon className="h-5 w-5 mr-2" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};

export default Notification;