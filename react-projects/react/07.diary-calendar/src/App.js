import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar'; // Ensure path is correct based on your project structure
import DiaryEntryModal from './components/DiaryEntryModal'; // Ensure path is correct

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('diaryEntries');
    return savedEntries ? JSON.parse(savedEntries) : {};
  });

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const handleDayClick = (day) => {
    const today = new Date();
    const selectedDate = new Date(today.getFullYear(), today.getMonth(), day);
    if (selectedDate <= today) {
      setSelectedDay(day);
    } else {
      alert("Future dates cannot be selected for entries.");
    }
  };

  const saveEntry = (day, entryText) => {
    const newEntries = { ...entries, [day]: entryText };
    setEntries(newEntries);
    setSelectedDay(null);
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
