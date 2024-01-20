import React, { useState } from 'react';

const getAlertButtonColorClass = (event) => {
  const firstWord = event.split(' ')[0].toLowerCase();
  
  switch (firstWord) {
    case 'red':
      return 'bg-red-600 hover:bg-red-400';
    case 'amber':
      return 'bg-amber-500 hover:bg-amber-400';
    case 'yellow':
      return 'bg-yellow-400 hover:bg-yellow-300';
    default:
      return 'bg-blue-600 hover:bg-blue-400'; // Default color
  }
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });
};

const formatDescription = (description) => {
  // Replace illegal characters and add line breaks for better readability
  return description
    .replace(/â€™/g, "'") // Replace curly apostrophes
    .replace(/â€œ|â€/g, '"') // Replace curly quotes
    .split('\n').map((item, index) => (
      <p key={index} className="mb-4">{item}</p>
    ));
};

const AlertsComponent = ({ alerts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (alerts.length === 0) return null;

  const alertButtonColor = getAlertButtonColorClass(alerts[0].event);

  return (
    <>
      <button onClick={handleOpenModal} className={`text-white font-bold py-2 px-4 my-2 rounded ${alertButtonColor}`}>
        {alerts.length > 0 ? `${alerts[0].event} Alert` : 'No Alerts'}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modal-overlay">
          <div className="relative top-20 mx-auto border w-96 shadow-lg rounded-md bg-white w-1/2">
            <div className="modal-content p-5">
              <button onClick={handleCloseModal} className="mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Close
              </button>
              {alerts.map((alert, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-2xl font-bold text-red-600 my-4">{alert.event}</h3>
                  <p className='text-sm text-gray-700 pb-1'>Starts {formatDate(alert.start)} - Ends {formatDate(alert.end)}</p>
                  <hr className='mb-6' />
                  {formatDescription(alert.description)}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertsComponent;
