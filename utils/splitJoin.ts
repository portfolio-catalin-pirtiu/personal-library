import { capitalize } from './capitalize';

export function splitJoin(text: string) {
  if (text.length === 0) return '';

  const arrayOfStrings = text.split(' ');
  const upCaseArrayOfStrings = arrayOfStrings.map((str) => {
    return capitalize(str);
  });

  return upCaseArrayOfStrings.join(' ');
}
