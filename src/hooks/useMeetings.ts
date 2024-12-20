import { useState } from 'react';
import { Meeting } from '../types/meeting';

export const useMeetings = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([
    {
      id: 1,
      title: 'Client Meeting',
      date: '2024-03-20',
      time: '10:00',
      participants: ['client@example.com'],
      type: 'client'
    },
    {
      id: 2,
      title: 'Team Sync',
      date: '2024-03-21',
      time: '14:00',
      participants: ['team@example.com'],
      type: 'team'
    }
  ]);

  const updateMeeting = (updatedMeeting: Meeting) => {
    setMeetings(meetings.map(meeting => 
      meeting.id === updatedMeeting.id ? updatedMeeting : meeting
    ));
  };

  const deleteMeeting = (id: number) => {
    setMeetings(meetings.filter(meeting => meeting.id !== id));
  };

  return { 
    meetings, 
    updateMeeting, 
    deleteMeeting 
  };
};