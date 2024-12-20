import React, { useState } from 'react';
import DateTimePicker from './DateTimePicker';
import MeetingTypeSelector from './MeetingTypeSelector';
import ParticipantsInput from './ParticipantsInput';
import AvailabilityChecker from './AvailabilityChecker';
import { useNotification } from '../../hooks/useNotification';
import { checkTimeSlotAvailability, formatDateTime } from '../../utils/scheduling';

const SchedulingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [meetingType, setMeetingType] = useState('client');
  const [participants, setParticipants] = useState('');
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isAvailable = await checkTimeSlotAvailability(date, time);
    
    if (!isAvailable) {
      showNotification('This time slot is not available', 'error');
      return;
    }

    const formattedDateTime = formatDateTime(date, time);
    showNotification(`Meeting scheduled for ${formattedDateTime}`, 'success');
  };

  const handleTimeSelect = (selectedTime: string) => {
    setTime(selectedTime);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <DateTimePicker
        date={date}
        time={time}
        onDateChange={setDate}
        onTimeChange={setTime}
      />
      {date && <AvailabilityChecker date={date} onTimeSelect={handleTimeSelect} />}
      <MeetingTypeSelector value={meetingType} onChange={setMeetingType} />
      <ParticipantsInput value={participants} onChange={setParticipants} />
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Schedule Meeting
      </button>
    </form>
  );
};

export default SchedulingForm;