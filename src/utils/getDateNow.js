export default function getDateNow() {
  const dateNow = Date.now();
  const date = new Date(dateNow);
  return date;
}