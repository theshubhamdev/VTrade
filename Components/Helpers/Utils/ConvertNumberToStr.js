export const Convert = number => {
  if (number > 1e12) {
    return `${(number / 1e12).toFixed(2)} LCr`;
  }
  if (number > 1e10) {
    return `${(number / 1e7).toFixed(2)} KCr`;
  }
  if (number > 1e7) {
    return `${(number / 1e7).toFixed(2)} Cr`;
  }
  if (number > 1e5) {
    return `${(number / 1e5).toFixed(2)} L`;
  }
  return number;
};
