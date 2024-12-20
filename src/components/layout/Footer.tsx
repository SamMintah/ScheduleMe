import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ScheduleMe. All rights reserved.
          </p>
          <div className="space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;