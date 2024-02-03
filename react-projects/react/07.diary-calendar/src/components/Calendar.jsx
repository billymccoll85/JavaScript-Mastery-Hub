import React from 'react';

const Calendar = ({ onDayClick, entries }) => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1); // Adjust based on the actual month
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();

  const isToday = (day) => {
    const dateCheck = new Date(today.getFullYear(), today.getMonth(), day);
    return dateCheck.toDateString() === today.toDateString();
  };

  const truncateText = (text, length) => text.length > length ? `${text.substring(0, length)}...` : text;

  return (
    <div className="flex justify-center mt-5">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="text-center text-gray-500 bg-gray-100 py-2">{currentMonth} {currentYear}</div>
        <div className="grid grid-cols-7">
          {days.map(day => (
            <div
              key={day}
              className={`border p-2 hover:bg-blue-200 flex justify-center items-center cursor-pointer ${isToday(day) ? 'bg-blue-100' : 'bg-white'}`}
              style={{ height: '150px', width: '150px', borderWidth: '1px', borderColor: '#e5e7eb' }} // Tailwind gray-200 equivalent
              onClick={() => onDayClick(day)}
            >
              <div className="text-center">
                <span>{day}</span>
                {entries && entries[day] && (
                  <div className="text-xs mt-1 text-gray-500">{truncateText(entries[day], 256)}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
