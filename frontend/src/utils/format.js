export function formatKey(key) {
  return key.replace(/([a-z])([A-Z])/g, '$1 $2');
}

export function formatNumber(num, key = '') {
  const unformattedKeys = ["BTC"]; // Array of keys to skip formatting
  if (unformattedKeys.some(unformattedKey => key.includes(unformattedKey))) {
    return num;
  }
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(num);
}

export function formatDays(days) {
  const years = Math.floor(days / 365);
  const remainingDays = Math.floor(days % 365);

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''}${remainingDays > 0 ? ` and ${remainingDays} day${remainingDays > 1 ? 's' : ''}` : ''}`;
  }

  return `${Math.round(days)} day${days !== 1 ? 's' : ''}`;
}