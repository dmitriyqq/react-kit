export type BasicColorType = { red: number; green: number; blue: number };

export const rgb2hsv = (
  r: number,
  g: number,
  b: number
): [number, number, number] => {
  let computedH = 0;
  let computedS = 0;
  let computedV = 0;

  r = r / 255;
  g = g / 255;
  b = b / 255;

  const minRGB = Math.min(r, Math.min(g, b));
  const maxRGB = Math.max(r, Math.max(g, b));

  // Black-gray-white
  if (minRGB == maxRGB) {
    computedV = minRGB;
    return [0, 0, computedV];
  }

  // Colors other than black-gray-white:
  const d = r == minRGB ? g - b : b == minRGB ? r - g : b - r;
  const h = r == minRGB ? 3 : b == minRGB ? 1 : 5;
  computedH = 60 * (h - d / (maxRGB - minRGB));
  computedS = (maxRGB - minRGB) / maxRGB;
  computedV = maxRGB;

  return [computedH / 360, computedS, computedV];
};

const hsv2rgbHelper = (
  h: number,
  s: number,
  v: number
): [number, number, number] => {
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }

  return [0, 0, 0];
};

export const hsv2rgb = (h: number, s: number, v: number) => {
  const [r, g, b] = hsv2rgbHelper(h, s, v);
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

const mapRange = (
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) => {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};

export const generateColorPalette = (
  baseColor: string,
  minSaturation = 0.0,
  maxSaturation = 1.0,
  minValue = 0.0,
  maxValue = 1.0
) => {
  // console.log("base Color", baseColor);
  const [baseRed, baseGreen, baseBlue] = getRgbFromHex(baseColor);

  // eslint-disable-next-line prefer-const
  let [h, s, v] = rgb2hsv(baseRed, baseGreen, baseBlue);

  if (s > maxSaturation) {
    s = maxSaturation;
  }
  if (s < minSaturation) {
    s = minSaturation;
  }

  if (v > maxValue) {
    v = maxValue;
  }
  if (v < minValue) {
    v = minValue;
  }

  const colors = [];

  const DEFAULT_D = 10;

  for (let i = 1; i <= 4; i++) {
    const dS = (s - minValue) / DEFAULT_D;
    const dV = (v - minValue) / DEFAULT_D;

    const cS = mapRange(
      i,
      1,
      4,
      minSaturation,
      Math.max(s - dS, minSaturation)
    );
    const cV = mapRange(i, 1, 4, minValue, Math.max(v - dV, minValue));

    const [red, green, blue] = hsv2rgb(h, cS, cV);
    colors.push({
      red,
      green,
      blue,
    });
  }

  colors.push({ red: baseRed, green: baseGreen, blue: baseBlue });

  for (let i = 1; i <= 4; i++) {
    const dS = (maxSaturation - s) / DEFAULT_D;
    const dV = (maxValue - v) / DEFAULT_D;

    const cS = mapRange(
      i,
      1,
      4,
      Math.min(s + dS, maxSaturation),
      maxSaturation
    );
    const cV = mapRange(i, 1, 4, Math.min(v + dV, maxValue), maxValue);

    // console.log("hsv", h, cS, cV);
    const [red, green, blue] = hsv2rgb(h, s, cV);

    colors.push({ red, green, blue });
  }
  return colors;
};

export const buildHexColor = (color: BasicColorType) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const redHex = color.red.toString("16").padStart(2, "0");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const greenHex = color.green.toString("16").padStart(2, "0");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const blueHex = color.blue.toString("16").padStart(2, "0");

  return `#${redHex}${greenHex}${blueHex}`;
};

export const getRgbFromHex = (hex: string) => {
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);
  return [red, green, blue];
};

export const generateColorDescription = (colors: BasicColorType[]) => ({
  "100": buildHexColor(colors[0]),
  "200": buildHexColor(colors[1]),
  "300": buildHexColor(colors[2]),
  "400": buildHexColor(colors[3]),
  "500": buildHexColor(colors[4]),
  "600": buildHexColor(colors[5]),
  "700": buildHexColor(colors[6]),
  "800": buildHexColor(colors[7]),
  "900": buildHexColor(colors[8]),
});
