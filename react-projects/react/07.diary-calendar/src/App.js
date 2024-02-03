import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar'; // Adjust this import if necessary
import DiaryEntryModal from './components/DiaryEntryModal'; // Adjust this import if necessary

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [entries, setEntries] = useState(() => {
    // Load saved entries from localStorage
    const savedEntries = localStorage.getItem('diaryEntries');
    return savedEntries ? JSON.parse(savedEntries) : {};
  });

  useEffect(() => {
    // Save entries to localStorage whenever they change
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const handleDayClick = (day) => {
    // Removed the check for future dates
    setSelectedDay(day);
  };

  const saveEntry = (day, entryText) => {
    const newEntries = { ...entries, [day]: entryText };
    setEntries(newEntries);
    setSelectedDay(null); // Close the modal after saving
  };

  return (
    <div className="App">
      <Calendar onDayClick={handleDayClick} entries={entries} />
      {selectedDay && (
        <DiaryEntryModal
          onSave={saveEntry}
          onClose={() => setSelectedDay(null)}
          selectedDay={selectedDay}
          currentEntry={entries[selectedDay] || ''}
        />
      )}
    </div>
  );
};

export default App;
