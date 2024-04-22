export const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const month = date.toLocaleString('en-GB', { month: 'long' });
    const year = date.getFullYear().toString();  // Convert year to string
    const formattedYear = year.slice(0, 4);      // Ensure only the first four digits of the year are used
    return `${month} ${formattedYear}`;          // Return the formatted date as "Month Year"
};