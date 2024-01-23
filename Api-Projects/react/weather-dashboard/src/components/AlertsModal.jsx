import React, { useState } from 'react';

/**
 * Get the CSS class for the alert button based on the event.
 * @param {string} event - The event name.
 * @returns {string} - The CSS class for the alert button.
 */
const getAlertButtonColorClass = (event) => {
  const firstWord = event.split(' ')[0].toLowerCase();
  
  switch (firstWord) {
    case 'red':
      return 'bg-red-600 hover:bg-red-700';
    case 'amber':
      return 'bg-amber-600 hover:bg-amber-800';
    case 'yellow':
      return 'bg-yellow-500 hover:bg-yellow-600';
    default:
      return 'bg-blue-600 hover:bg-blue-400'; // Default color
  }
};

/**
 * Format the timestamp to a localized date and time string.
 * @param {number} timestamp - The timestamp in seconds.
 * @returns {string} - The formatted date and time string.
 */
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short', hour12: false });
};

/**
 * Format the description text, replacing special characters and adding links.
 * @param {string} description - The description text.
 * @returns {JSX.Element[]} - An array of JSX elements representing the formatted description.
 */
const formatDescription = (description) => {
  const urlRegex = new RegExp('(\\bhttps?://[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])', 'gi');
  return description
    .replace(/â€™/g, "'") // Replace curly apostrophes
    .replace(/â€œ|â€/g, '"') // Replace curly quotes
    .split('\n')
    .map((item, index) => (
      <p key={index} className="mb-4">
        {item.split(urlRegex).map((part, i) => 
          urlRegex.test(part) ? 
            <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{part}</a> 
            : part
        )}
      </p>
    ));
};

/**
 * Component for displaying alerts.
 * @param {Object[]} alerts - An array of alert objects.
 * @returns {JSX.Element|null} - The JSX element representing the alerts component, or null if there are no alerts.
 */
const AlertsComponent = ({ alerts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let touchStart = null;
  const handleTouchStart = (e) => {
    touchStart = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStart) {
      return;
    }
    const touchEnd = e.targetTouches[0].clientX;
    if (touchStart - touchEnd > 50) { // Swipe left
      setIsModalOpen(false);
    }
    if (touchEnd - touchStart > 50) { // Swipe right
      setIsModalOpen(false);
    }
  };

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
      <button onClick={handleOpenModal} className={`alertsBtn text-sky-50 text-md font-bold py-2 px-4 my-2 rounded ${alertButtonColor}`}>
        {alerts.length > 0 ? `${alerts[0].event}` : 'No Alerts'}
      </button>

      {isModalOpen && (
        <div 
          onTouchStart={handleTouchStart} 
          onTouchMove={handleTouchMove}
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" 
          id="modal-overlay"
        >
          <div className="relative p-4 border shadow-lg rounded-md bg-white md:w-1/2 w-11/12 h-4/6 overflow-y-auto modal-content">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                X
            </button>
            <div className="modal-content mt-10">
              {alerts.map((alert, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-700 my-4">{alert.event}</h3>
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
