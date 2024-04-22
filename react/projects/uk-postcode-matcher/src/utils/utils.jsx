export const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const month = date.toLocaleString('en-GB', { month: 'long' });
    const year = date.getFullYear().toString();  
    const formattedYear = year.slice(0, 4); 
    return `${month} ${formattedYear}`;
};