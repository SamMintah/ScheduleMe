import React from 'react';
import { Users } from 'lucide-react';

interface MeetingTypeSelectorProps {
  value: string;
  onChange: (type: string) => void;
}

const MeetingTypeSelector: React.FC<MeetingTypeSelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Meeting Type</label>
      <div className="mt-1 relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="client">Client Meeting</option>
          <option value="freelancer">Freelancer Meeting</option>
          <option value="team">Team Meeting</option>
        </select>
        <Users className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default MeetingTypeSelector;