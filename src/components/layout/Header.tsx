import React from 'react';
import { Calendar, LogOut } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <div className="ml-3">
              <h1 className="text-xl font-semibold text-gray-900">ScheduleMe</h1>
              <p className="text-sm text-gray-500">Simple meeting scheduling</p>
            </div>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-500 hover:text-gray-700">
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;