import React, { CSSProperties } from "react";
import { FC } from "react";
import { EntityPage } from "../../EntityPage/EntityPage";
import { Theme, Variant } from "../../../themes";
import { FormFieldsType } from "../../../model";
import { Form } from "../../Form";
import { VariantsList } from "./VariantsList";
import { VariantBlock } from "./VariantBlock";
import { SelectOption } from "../../Select";

export interface Props {
  style: CSSProperties;
  variants: Theme["variants"];
  colorVariants: string[];
  textVariants: string[];
  boxShadowVariants: string[];
  spacingVariants: string[];
  borderVariants: string[];
  onVariantCreate: (variant: VariantEntity) => void;
  onVariantUpdate: (variant: VariantEntity) => void;
  onVariantDelete: (variant: VariantEntity) => void;
}

export interface VariantEntity extends Variant {
  variantName: string;
}

type getFieldsOptions = {
  colorVariants: SelectOption<string>[];
  textVariants: SelectOption<string>[];
  boxShadowVariants: SelectOption<string>[];
  spacingVariants: SelectOption<string>[];
  borderVariants: SelectOption<string>[];
};

const getFields = (
  options: getFieldsOptions
): FormFieldsType<VariantEntity> => [
  {
    name: "variantName",
    type: "text",
    label: "Название",
  },
  {
    name: "backgroundColor",
    type: "select",
    label: "Цвет фона",
    options: options.colorVariants,
    optional: true,
  },
  {
    name: "border",
    type: "select",
    label: "Границы",
    options: options.borderVariants,
    optional: true,
  },
  {
    name: "borderColor",
    type: "select",
    label: "Цвет границы",
    options: options.colorVariants,
    optional: true,
  },
  {
    name: "text",
    type: "select",
    label: "Текст",
    options: options.textVariants,
  },
  {
    name: "textColor",
    type: "select",
    label: "Цвет текста",
    options: options.colorVariants,
  },
  {
    name: "boxShadow",
    type: "select",
    label: "Тень",
    options: options.boxShadowVariants,
    optional: true,
  },
  {
    name: "boxShadowColor",
    type: "select",
    label: "Цвет тени",
    options: options.colorVariants,
    optional: true,
  },
  {
    name: "padding",
    type: "select",
    label: "Внутренний отступ",
    options: options.spacingVariants,
    optional: true,
  },
  {
    name: "margin",
    type: "select",
    label: "Внешний отступ",
    options: options.spacingVariants,
    optional: true,
  },
];

const getSelectOptions = (ids: string[]) =>
  ids.map((id) => ({
    id,
    value: id,
    label: id,
  }));

export const VariantTab: FC<Props> = ({
  variants,
  colorVariants,
  textVariants,
  boxShadowVariants,
  spacingVariants,
  borderVariants,
  onVariantCreate,
  onVariantUpdate,
  onVariantDelete,
}) => {
  const colorVariantsOptions = getSelectOptions(colorVariants);
  const textVariantsOptions = getSelectOptions(textVariants);
  const boxShadowVariantsOptions = getSelectOptions(boxShadowVariants);
  const spacingVariantsOptions = getSelectOptions(spacingVariants);
  const borderVariantsOptions = getSelectOptions(borderVariants);

  return (
    <EntityPage<VariantEntity, VariantEntity>
      entities={Object.entries(variants).map(
        ([key, value]): VariantEntity => ({
          variantName: key,
          ...value,
        })
      )}
      entityTypeName={"variant"}
      fields={getFields({
        colorVariants: getSelectOptions(colorVariants),
        textVariants: getSelectOptions(textVariants),
        boxShadowVariants: getSelectOptions(boxShadowVariants),
        spacingVariants: getSelectOptions(spacingVariants),
        borderVariants: getSelectOptions(borderVariants),
      })}
      initialFormCreationValue={{
        variantName: "",
        backgroundColor:
          colorVariantsOptions.find((o) => o.id === "primaryBackground") ??
          colorVariantsOptions[0],
        border: borderVariantsOptions[0],
        borderColor:
          colorVariantsOptions.find((o) => o.id === "primary") ??
          colorVariantsOptions[0],
        text: textVariantsOptions[0],
        textColor:
          colorVariantsOptions.find((o) => o.id === "text") ??
          colorVariantsOptions[0],
        boxShadow: boxShadowVariantsOptions[0],
        boxShadowColor:
          colorVariantsOptions.find((o) => o.id === "grey") ??
          colorVariantsOptions[0],
        padding: spacingVariantsOptions[0],
        margin: spacingVariantsOptions[0],
      }}
      onEntityCreateRequest={(entity) => onVariantCreate(entity)}
      onEntityUpdateRequest={(entity) => onVariantUpdate(entity)}
      onEntityDeleteRequest={(entity) => onVariantDelete(entity)}
      renderEntitiesList={({ entities, onEntitySelect }) => (
        <VariantsList variants={entities} onVariantSelected={onEntitySelect} />
      )}
      renderEntityComponent={({ entity }) => <VariantBlock variant={entity} />}
      renderEntityForm={({
        fields,
        onChange,
        onCreate,
        onUpdate,
        originalValue,
        value,
      }) => (
        <Form
          fields={fields}
          onChange={onChange}
          onUpdate={onUpdate}
          onCreate={onCreate}
          value={value}
          originalValue={originalValue}
        />
      )}
    />
  );
};
