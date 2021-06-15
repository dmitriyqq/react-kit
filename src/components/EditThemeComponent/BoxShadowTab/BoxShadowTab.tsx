import React, { FC } from "react";
import { CSSProperties } from "react";
import { BoxShadow, Theme } from "../../../themes";
import { Form } from "../../Form";
import { FormFieldsType } from "../../../model";
import { EntityPage } from "../../EntityPage/EntityPage";
import { BoxShadowList } from "./BoxShadowList";
import { BoxShadowComponent } from "./BoxShadowComponent";
import { DEFAULT_BOX_SHADOW } from "../../../themes/helpers/boxShadow";

interface Props {
  style?: CSSProperties;
  boxShadows: Theme["boxShadows"];
  onBoxShadowCreate: (boxShadow: BoxShadowEntity) => void;
  onBoxShadowUpdate: (boxShadow: BoxShadowEntity) => void;
  onBoxShadowDelete: (boxShadow: BoxShadowEntity) => void;
}

export interface BoxShadowEntity extends BoxShadow {
  boxShadowName: string;
}

const fields: FormFieldsType<BoxShadowEntity> = [
  {
    name: "boxShadowName",
    label: "Название",
    type: "text",
    validator: (value) =>
      !value?.boxShadowName
        ? { valid: false, message: "boxShadowName can't be empty" }
        : { valid: true },
  },
  {
    name: "hOffset",
    label: "Отступ по высоте",
    type: "range",
    min: -100,
    max: 100,
    step: 0.1,
  },
  {
    name: "vOffset",
    label: "Отступ по ширине",
    type: "range",
    min: -100,
    max: 100,
    step: 0.1,
  },
  {
    name: "blur",
    label: "Размытие",
    type: "range",
    min: 0,
    max: 100,
    step: 0.1,
  },
  {
    name: "spread",
    label: "Spread",
    type: "range",
    min: 0,
    max: 100,
    step: 0.1,
  },
];

export const BoxShadowTab: FC<Props> = ({
  style,
  boxShadows,
  onBoxShadowCreate,
  onBoxShadowUpdate,
  onBoxShadowDelete,
}) => (
  <EntityPage<BoxShadowEntity, BoxShadowEntity>
    style={style}
    entityTypeName="Тень"
    entities={Object.entries(boxShadows).map(
      ([key, value]): BoxShadowEntity => ({
        boxShadowName: key,
        ...value,
      })
    )}
    fields={fields}
    initialFormCreationValue={{
      boxShadowName: "",
      ...DEFAULT_BOX_SHADOW,
    }}
    onEntityCreateRequest={(entity) => onBoxShadowCreate(entity)}
    onEntityUpdateRequest={(entity) => onBoxShadowUpdate(entity)}
    onEntityDeleteRequest={(entity) => onBoxShadowDelete(entity)}
    renderEntitiesList={({ entities, onEntitySelect }) => (
      <BoxShadowList
        boxShadows={entities}
        onBoxShadowSelected={onEntitySelect}
      />
    )}
    renderEntityComponent={({ entity }) => (
      <BoxShadowComponent boxShadow={entity} />
    )}
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
