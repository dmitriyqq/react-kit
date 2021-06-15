export type ShadeType =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type MainShadeType = "300" | "400" | "500" | "600" | "700";

export interface Color {
  [100]: string;
  [200]: string;
  [300]: string;
  [400]: string;
  [500]: string;
  [600]: string;
  [700]: string;
  [800]: string;
  [900]: string;
}
