export default function getDate(string) {
  const date = new Date(string);
  const nowDate = Date.now();

  const diff = nowDate - date;

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);

  const oneDay = 86400000;

  if (diff < oneDay) {
    return `${hours}:${minutes}`;
  } else if (diff < (oneDay * 2)) {
    return `Вчера в ${hours}:${minutes}`;
  } else if (diff < (oneDay * 3)) {
    return `Позавчера в ${hours}:${minutes}`;
  } else {
    return `${day}.${month}.${year} в ${hours}:${minutes} `;
  }
}