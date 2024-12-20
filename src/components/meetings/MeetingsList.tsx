import React, { useState } from 'react';
import MeetingCard from './MeetingCard';
import EditMeetingModal from './EditMeetingModal';
import ConfirmationModal from '../common/ConfirmationModal';
import { useMeetings } from '../../hooks/useMeetings';
import { useNotification } from '../../hooks/useNotification';
import { Meeting } from '../../types/meeting';

const MeetingsList = () => {
  const { meetings, updateMeeting, deleteMeeting } = useMeetings();
  const { showNotification } = useNotification();
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = (id: number) => {
    const meeting = meetings.find(m => m.id === id);
    if (meeting) {
      setSelectedMeeting(meeting);
      setShowEditModal(true);
    }
  };

  const handleDelete = (id: number) => {
    const meeting = meetings.find(m => m.id === id);
    if (meeting) {
      setSelectedMeeting(meeting);
      setShowDeleteModal(true);
    }
  };

  const handleSaveEdit = (updatedMeeting: Meeting) => {
    updateMeeting(updatedMeeting);
    showNotification('Meeting updated successfully', 'success');
    setShowEditModal(false);
    setSelectedMeeting(null);
  };

  const confirmDelete = () => {
    if (selectedMeeting) {
      deleteMeeting(selectedMeeting.id);
      showNotification('Meeting cancelled successfully', 'success');
      setShowDeleteModal(false);
      setSelectedMeeting(null);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900">Upcoming Meetings</h2>
      {meetings.length === 0 ? (
        <p className="text-gray-500">No upcoming meetings</p>
      ) : (
        meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
            onEdit={() => handleEdit(meeting.id)}
            onDelete={() => handleDelete(meeting.id)}
          />
        ))
      )}

      <EditMeetingModal
        meeting={selectedMeeting}
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedMeeting(null);
        }}
        onSave={handleSaveEdit}
      />

      <ConfirmationModal
        isOpen={showDeleteModal}
        title="Cancel Meeting"
        message="Are you sure you want to cancel this meeting? All participants will be notified."
        confirmLabel="Cancel Meeting"
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

export default MeetingsList;