import { colors } from './colors';

interface ChangeColorHue {
  original: string;
  lighter?: boolean;
  darker?: boolean;
  points: number;
}
export function changeColorHue({
  original = colors.gray,
  lighter = false,
  darker = true,
  points = 30,
}: ChangeColorHue) {
  if (!original) return colors.gray;
  const index = original.lastIndexOf('%');
  const currentHue = Number(
    `${original[index - 2]}` + `${original[index - 1]}`
  );

  let newHue: string = '';
  if (lighter) newHue = String(currentHue + points);
  else newHue = String(currentHue - points);
  if ((lighter && darker) || (!lighter && !darker)) newHue = colors.gray;

  const newHueArray = Array.from(original, (el, i) => {
    if (i === index - 2) return newHue[0];
    if (i === index - 1) return newHue[1];
    return el;
  });
  return newHueArray.join('');
}
