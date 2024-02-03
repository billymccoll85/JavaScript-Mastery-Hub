import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import DiaryEntryModal from './components/DiaryEntryModal';
import { Analytics } from '@vercel/analytics/react';


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

    setSelectedDay(day);
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
      <Analytics />
    </div>
  );
};

export default App;
