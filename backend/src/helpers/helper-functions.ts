export const checkData = (data: string | number) => {
  if (typeof data === 'string') return data.length > 0;
  return isNaN(data);
};
