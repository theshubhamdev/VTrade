export const GetDate = date => {
  const newDate = new Date(date * 1000);
  return newDate.getDate();
};

export const GetTime = date => {
  const newDate = new Date(date * 1000);
  return `${newDate.getHours()}`;
};

export const GetMonth = date => {
  const newDate = new Date(date * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${months[newDate.getMonth()]}`;
};

export const GetYear = date => {
  const newDate = new Date(date * 1000);
  return newDate.getFullYear();
};
export const GetFullDateInfo = date => {
  const newDate = new Date(date * 1000);
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}${' '}${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
};
export const GetMinutes = date => {
  const newDate = new Date(date * 1000);
  return `${newDate.getMinutes()}`;
};
