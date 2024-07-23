import plural from "./plural";

export default function dateFormat(string) {
  const date = new Date(string);
  const currentDate = new Date();

  const months = Math.floor((currentDate - date) / 2592000000);
  if (months === 12) {
    return 'Около 1 года';
  } else if (months > 12) {
    return 'Более 1 года';
  } else {
    return `${months} ${plural(months, { one: 'месяц', few: 'месяца', many: 'месяцев' })}`
  }
} 