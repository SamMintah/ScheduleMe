import React, { useState } from 'react';
import { Calendar, Clock, Users, Mail } from 'lucide-react';

const ScheduleForm = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
          Meeting scheduled successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <div className="mt-1 relative">
            <input
              type="date"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
            <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <div className="mt-1 relative">
            <input
              type="time"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
            <Clock className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>1.5 hours</option>
            <option>2 hours</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Meeting Type</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Client Meeting</option>
            <option>Freelancer Meeting</option>
            <option>Team Meeting</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Participants</label>
          <div className="mt-1 relative">
            <input
              type="email"
              placeholder="Enter participant emails"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
            <Users className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Schedule Meeting
        </button>
      </form>
    </div>
  );
};

export default ScheduleForm;