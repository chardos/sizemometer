export function getReadableDate(timestamp) {
  const date = new Date(parseInt(timestamp, 10));
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
