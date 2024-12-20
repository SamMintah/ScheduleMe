import React from 'react';
import { Calendar, Clock, Users, Edit2, Trash2 } from 'lucide-react';
import { Meeting } from '../../types/meeting';

interface MeetingCardProps {
  meeting: Meeting;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const MeetingCard: React.FC<MeetingCardProps> = ({ meeting, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{meeting.title}</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{meeting.date}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-2" />
              <span>{meeting.time}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Users className="h-4 w-4 mr-2" />
              <span>{meeting.participants.join(', ')}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(meeting.id)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
          >
            <Edit2 className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(meeting.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;