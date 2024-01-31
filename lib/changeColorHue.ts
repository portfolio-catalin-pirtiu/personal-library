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
  const index = original.lastIndexOf('%');
  const currentHue = Number(
    `${original[index - 2]}` + `${original[index - 1]}`
  );
  let darkerHue: string = '';
  if (lighter) darkerHue = String(currentHue + points);
  if (darker) darkerHue = String(currentHue - points);

  const newHueArray = Array.from(original, (el, i) => {
    if (i === index - 2) return darkerHue[0];
    if (i === index - 1) return darkerHue[1];
    return el;
  });
}
