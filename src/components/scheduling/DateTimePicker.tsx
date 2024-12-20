import React from 'react';
interface DateTimePickerProps {
  date: string;
  time: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  date,
  time,
  onDateChange,
  onTimeChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium">Date</label>
        <div className="mt-1 relative">
          <input
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Time</label>
        <div className="mt-1 relative">
          <input
            type="time"
            value={time}
            onChange={(e) => onTimeChange(e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;