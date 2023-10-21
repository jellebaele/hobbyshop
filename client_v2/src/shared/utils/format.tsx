export const formatDateTime = (dateTime: string | Date): string => {
  let date: Date;
  if (typeof dateTime === 'string') date = new Date(dateTime);
  else date = dateTime;

  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

export const timeAgo = (dateTime: string | Date): string => {
  let date: Date;
  if (typeof dateTime === 'string') date = new Date(dateTime);
  else date = dateTime;

  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = seconds;
  if (interval < 60) return Math.floor(interval) + 's geleden';
  interval /= 60;
  if (interval < 60) return Math.floor(interval) + ' min. geleden';
  interval /= 60;
  if (interval < 24) return Math.floor(interval) + 'u geleden';
  interval /= 24;
  if (interval < 2) return Math.floor(interval) + ' dag geleden';
  if (interval < 365) return Math.floor(interval) + ' dagen geleden';
  interval /= 365;
  return Math.floor(interval) + ' jaar geleden';
};
