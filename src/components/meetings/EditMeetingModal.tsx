import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import DateTimePicker from '../scheduling/DateTimePicker';
import MeetingTypeSelector from '../scheduling/MeetingTypeSelector';
import ParticipantsInput from '../scheduling/ParticipantsInput';
import AvailabilityChecker from '../scheduling/AvailabilityChecker';
import { Meeting } from '../../types/meeting';
import { checkTimeSlotAvailability } from '../../utils/scheduling';

interface EditMeetingModalProps {
  meeting: Meeting | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (meeting: Meeting) => void;
}

const EditMeetingModal: React.FC<EditMeetingModalProps> = ({
  meeting,
  isOpen,
  onClose,
  onSave,
}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState<Meeting['type']>('client');
  const [participants, setParticipants] = useState('');

  useEffect(() => {
    if (meeting) {
      setDate(meeting.date);
      setTime(meeting.time);
      setType(meeting.type);
      setParticipants(meeting.participants.join(', '));
    }
  }, [meeting]);

  if (!isOpen || !meeting) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isAvailable = await checkTimeSlotAvailability(date, time);
    if (!isAvailable && (date !== meeting.date || time !== meeting.time)) {
      alert('This time slot is not available');
      return;
    }

    onSave({
      ...meeting,
      date,
      time,
      type,
      participants: participants.split(',').map(email => email.trim()),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Edit Meeting</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <DateTimePicker
            date={date}
            time={time}
            onDateChange={setDate}
            onTimeChange={setTime}
          />
          {date && (date !== meeting.date || time !== meeting.time) && (
            <AvailabilityChecker date={date} onTimeSelect={setTime} />
          )}
          <MeetingTypeSelector value={type} onChange={setType} />
          <ParticipantsInput value={participants} onChange={setParticipants} />
          
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMeetingModal;