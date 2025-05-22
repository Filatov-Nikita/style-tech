import { numWithZero } from "./formats";

export function dateToLocale(date) {
  return date.toLocaleDateString('ru-RU', {
    month: 'long',
    day: '2-digit',
  });
}

export function dateToIso(date) {
  return `${date.getFullYear()}-${numWithZero(date.getMonth() + 1)}-${numWithZero(date.getDate())}`;
}
