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

  const hexToNo = parseInt(original, 16);
  let newHue: string = '';
  if (lighter) {
    const newHueSum = hexToNo + points;
    newHue = newHueSum.toString(16);
  } else {
    const newHueSubtract = hexToNo - points;
    newHue = newHueSubtract.toString(16);
  }
  if ((lighter && darker) || (!lighter && !darker)) newHue = colors.gray;

  return newHue;
}
