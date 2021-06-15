import { Variant } from "../../themes";

const generateTextVariant = (text: string, textColor: string) => ({
  textColor,
  text,
  backgroundColor: null,
  boxShadow: null,
  border: null,
  padding: "single",
  margin: "single",
});

export const generateVariants = (): { [key: string]: Variant } => {
  const variants: { [key: string]: Variant } = {};

  const buttonColors = ["primary", "secondary", "danger", "success", "warning"];

  for (const color of buttonColors) {
    const variant: Variant = {
      textColor: "white",
      backgroundColor: color,
      boxShadow: "2",
      boxShadowColor: "grey",
      text: "button",
      border: null,
      padding: "single",
      margin: "double",
    };
    variants[`${color}Button`] = variant;
  }

  variants.regularText = generateTextVariant("regular", "text");
  variants.labelText = generateTextVariant("label", "text");
  variants.subLabelText = generateTextVariant("sublabel", "text");
  variants.headerText = generateTextVariant("header", "primary");
  variants.highlightText = generateTextVariant("highlight", "text");
  variants.buttonText = generateTextVariant("button", "text");

  return variants;
};
