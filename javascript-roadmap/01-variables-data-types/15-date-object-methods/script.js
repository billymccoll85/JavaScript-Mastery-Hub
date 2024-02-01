const d = new Date();

// Date methods
const x = {
  toString: d.toString(),
  getTime: d.getTime(),
  valueOf: d.valueOf(),
  getFullYear: d.getFullYear(),
  getMonth: d.getMonth() + 1,
  getDate: d.getDate(),
  getDay: d.getDay(),
  getHours: d.getHours(),
  getMinutes: d.getMinutes(),
  getSeconds: d.getSeconds(),
  getMilliseconds: d.getMilliseconds(),
  formattedDate: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
  formattedDateUS: Intl.DateTimeFormat('en-US').format(d),
  formattedDateUK: Intl.DateTimeFormat('en-GB').format(d),
  formattedDateDefault: Intl.DateTimeFormat('default').format(d),
  formattedMonthDefault: Intl.DateTimeFormat('default', { month: 'long' }).format(d),
  formattedMonthShort: d.toLocaleString('default', { month: 'short' }),
  formattedDateTime: d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
  }),
};

console.log(x);
