import React from 'react';
import { Mail } from 'lucide-react';

interface ParticipantsInputProps {
  value: string;
  onChange: (emails: string) => void;
}

const ParticipantsInput: React.FC<ParticipantsInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Participants</label>
      <div className="mt-1 relative">
        <input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter participant emails (comma-separated)"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <Mail className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default ParticipantsInput;