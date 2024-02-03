import React from 'react';

const Calendar = ({ onDayClick, entries }) => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1); // Adjust based on the actual month
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };

  const isToday = (day) => {
    const dateCheck = new Date(today.getFullYear(), today.getMonth(), day);
    return dateCheck.toDateString() === today.toDateString();
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="border border-gray-200 rounded-lg overflow-hidden w-full max-w-screen-lg">
        <div className="text-center text-gray-500 bg-gray-100 py-2">{currentMonth} {currentYear}</div>
        <div className="grid grid-cols-1 md:grid-cols-7 w-full">
          {days.map(day => (
            <div
              key={day}
              className={`border border-gray-200 p-2 hover:bg-blue-200 flex flex-col cursor-pointer ${isToday(day) ? 'bg-blue-100' : 'bg-white'}`}
              style={{ minHeight: '100px' }}
              onClick={() => onDayClick(day)}
            >
              <div className="text-left text-xs pl-2 pt-1">
                <span className="font-semibold">{day}<sup>{getDaySuffix(day)}</sup></span>
              </div>
              <div className="text-xs text-gray-500 mt-1 overflow-hidden flex-grow">
                {entries && entries[day] && entries[day].substring(0, 256)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
