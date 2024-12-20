import React from 'react';
import { Calendar, User, HelpCircle, Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">MeetFlow</span>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            {[
              { icon: Home, text: 'Home' },
              { icon: Calendar, text: 'Schedule a Meeting' },
              { icon: User, text: 'Profile' },
              { icon: HelpCircle, text: 'Help' },
            ].map(({ icon: Icon, text }) => (
              <button
                key={text}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                <Icon className="h-5 w-5 mr-1" />
                {text}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;