export const sum = <T>(items: T[], numberGetter: (value: T) => number) => items.reduce((sum, item) => sum + numberGetter(item), 0);

export const getMonthRange = (date: Date): [Date, Date] => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const startOfMonth = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0);

  return [startOfMonth, endOfMonth];
};
