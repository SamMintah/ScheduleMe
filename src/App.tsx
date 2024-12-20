import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SchedulingForm from './components/scheduling/SchedulingForm';
import MeetingsList from './components/meetings/MeetingsList';
import Notification from './components/common/Notification';
import { useNotification } from './hooks/useNotification';

function App() {
  const { notification, hideNotification } = useNotification();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Meeting</h2>
            <SchedulingForm />
          </div>
          <div>
            <MeetingsList />
          </div>
        </div>
      </main>
      <Footer />
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={hideNotification}
        />
      )}
    </div>
  );
}

export default App;