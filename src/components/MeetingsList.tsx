import React, { useState } from 'react';
import { Calendar, Clock, Edit2, Trash2 } from 'lucide-react';

const MeetingsList = () => {
  const [meetings] = useState([
    {
      id: 1,
      title: 'Client Meeting',
      date: '2024-03-20',
      time: '10:00',
      participants: ['client@example.com'],
    },
    {
      id: 2,
      title: 'Team Sync',
      date: '2024-03-21',
      time: '14:00',
      participants: ['team@example.com'],
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Meetings</h2>
      
      <div className="space-y-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
          >
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
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Confirm Action</h3>
            <p className="text-gray-500 mb-4">
              Are you sure you want to proceed? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetingsList;