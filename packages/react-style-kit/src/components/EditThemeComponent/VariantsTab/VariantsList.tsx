import React from "react";
import { FC } from "react";
import { VariantEntity } from "./VariantsTab";
import { List, ListItem } from "../../List";
import { VariantBlock } from "./VariantBlock";

export interface Props {
  variants: VariantEntity[];
  onVariantSelected: (entity: VariantEntity) => void;
}

export const VariantsList: FC<Props> = ({ variants, onVariantSelected }) => {
  const handleVariantSelected = (id?: string) => {
    const selectedVariant = variants.find((b) => b.variantName === id);
    if (id && selectedVariant) {
      onVariantSelected({ ...selectedVariant, variantName: id });
    }
  };

  return (
    <List>
      {variants.map((variant) => (
        <ListItem
          key={variant.variantName}
          id={variant.variantName}
          label={variant.variantName}
          onClick={handleVariantSelected}
        >
          <VariantBlock variant={variant} />
        </ListItem>
      ))}
    </List>
  );
};
