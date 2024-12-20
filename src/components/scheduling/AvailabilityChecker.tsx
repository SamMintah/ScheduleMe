import React from 'react';
import { Clock } from 'lucide-react';
import { getAvailableTimeSlots } from '../../utils/scheduling';

interface AvailabilityCheckerProps {
  date: string;
  onTimeSelect: (time: string) => void;
}

const AvailabilityChecker: React.FC<AvailabilityCheckerProps> = ({ date, onTimeSelect }) => {
  const timeSlots = getAvailableTimeSlots(date);

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Available Time Slots</h3>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot) => (
          <button
            key={slot.time}
            onClick={() => onTimeSelect(slot.time)}
            disabled={!slot.available}
            className={`
              flex items-center justify-center px-3 py-2 rounded-md text-sm
              ${slot.available
                ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            <Clock className="h-4 w-4 mr-1" />
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvailabilityChecker;