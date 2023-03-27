const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December	',
];

export const convertDate = (d: string) => {
  const date = new Date(d);
  return `${MONTHS[date.getMonth()]}, ${date.getDate()}, ${date.getFullYear()}`;
};
