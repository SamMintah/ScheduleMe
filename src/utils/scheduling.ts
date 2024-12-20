interface TimeSlot {
  time: string;
  available: boolean;
}

export const checkTimeSlotAvailability = async (
  date: string,
  time: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const dateTime = new Date(`${date}T${time}`);
      const hour = dateTime.getHours();
      resolve(hour >= 9 && hour <= 17); // Available between 9 AM and 5 PM
    }, 500);
  });
};

export const getAvailableTimeSlots = (date: string): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const bookedSlots = new Set(['10:00', '14:00', '15:00']); // Mock booked slots

  // Generate time slots from 9 AM to 5 PM
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push({
        time,
        available: !bookedSlots.has(time)
      });
    }
  }

  return slots;
};

export const formatDateTime = (date: string, time: string): string => {
  return new Date(`${date}T${time}`).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};