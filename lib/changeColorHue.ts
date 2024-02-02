interface IChangeColorHue {
  original: string;
  points?: number;
}

export function changeColorHue({
  original = '',
  points = 50,
}: IChangeColorHue) {
  const index = original.lastIndexOf('%');
  const currentPartHue = Number(original[index - 2] + original[index - 1]);
  const newPartHue = String(currentPartHue - points);

  const newHue = Array.from(original, (el, i) => {
    if (i === index - 2) return newPartHue[0];
    if (i === index - 1) return newPartHue[1];
    return el;
  });

  return newHue.join('');
}
