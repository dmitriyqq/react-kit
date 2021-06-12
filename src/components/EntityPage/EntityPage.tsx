import React, { CSSProperties, useState } from "react";
import { List, ListItem } from "../List";
import { Card } from "../Card/Card";
import { CardHeader } from "../Card/CardHeader";
import { CardContent } from "../Card/CardContent";
import { Button } from "../Button";
import { FormFieldsType, FormValue, getFormValue } from "../../model";

interface Props<EntityType, EntityListType = EntityType> {
  entities: EntityListType[];
  fields: FormFieldsType<EntityType>;
  initialFormCreationValue: FormValue<EntityType>;
  style?: CSSProperties;
  entityTypeName: string;
  renderEntityComponent: (props: { entity: EntityType }) => JSX.Element;
  renderEntityForm: (props: {
    fields: FormFieldsType<EntityType>;
    value: FormValue<EntityType>;
    originalValue?: EntityType | undefined;
    onChange: (internalValue: FormValue<EntityType>, value: EntityType) => void;
    onUpdate: (entity: EntityType) => void;
    onCreate: (entity: EntityType) => void;
  }) => JSX.Element;
  renderEntitiesList: (props: {
    entities: EntityListType[];
    onEntitySelect: (entity: EntityType) => void;
  }) => JSX.Element;
  onEntityCreateRequest: (entity: EntityType) => void;
  onEntityUpdateRequest: (entity: EntityType) => void;
  onEntityDeleteRequest: (entity: EntityType) => void;
}

export const EntityPage = <T extends object, V extends object>({
  style,
  entityTypeName,
  renderEntityComponent,
  renderEntityForm,
  initialFormCreationValue,
  fields,
  onEntityCreateRequest,
  onEntityUpdateRequest,
  onEntityDeleteRequest,
  entities,
  renderEntitiesList,
}: Props<T, V>) => {
  const [
    selectedOriginalEntity,
    setSelectedOriginalEntity,
  ] = useState<T | null>(null);
  const [isCreateNewEntity, setIsCreateNewEntity] = useState(false);
  const [internalFormValue, setInternalFormValue] = useState<FormValue<T>>(
    initialFormCreationValue
  );

  const handleCreateNewEntity = () => {
    setSelectedOriginalEntity(null);
    setIsCreateNewEntity(true);
    setInternalFormValue(initialFormCreationValue);
  };

  const handleEntityCreated = (entity: T) => {
    setSelectedOriginalEntity(null);
    setInternalFormValue(initialFormCreationValue);
    setIsCreateNewEntity(false);
    onEntityCreateRequest(entity);
  };

  const handleEntityUpdated = (entity: T) => {
    setSelectedOriginalEntity(null);
    setInternalFormValue(initialFormCreationValue);
    setIsCreateNewEntity(false);
    onEntityUpdateRequest(entity);
  };

  const handleEntitySelected = (entity: T) => {
    setSelectedOriginalEntity(entity);
    setInternalFormValue(entity);
    setIsCreateNewEntity(false);
  };

  const handleDeleteEntity = () => {
    if (selectedOriginalEntity) {
      onEntityDeleteRequest(selectedOriginalEntity);
      setSelectedOriginalEntity(null);
    }
  };

  return (
    <List mode="v" style={style}>
      <List mode={"h"}>
        <Button onClick={handleCreateNewEntity}>Создать</Button>
        {selectedOriginalEntity && (
          <Button themeColor="danger" onClick={handleDeleteEntity}>
            Удалить
          </Button>
        )}
      </List>
      <Card>
        <CardHeader title={`Редактирование сущности`} />
        <CardContent>
          {(isCreateNewEntity || selectedOriginalEntity) && (
            <List>
              {selectedOriginalEntity && (
                <ListItem label={`Оригинальный выбранный`}>
                  {renderEntityComponent({ entity: selectedOriginalEntity })}
                </ListItem>
              )}
              <ListItem label={`Измененный выбранный`}>
                {renderEntityComponent({
                  entity: getFormValue(internalFormValue, fields),
                })}
              </ListItem>
            </List>
          )}
          {(isCreateNewEntity || selectedOriginalEntity) &&
            renderEntityForm({
              value: internalFormValue,
              originalValue: selectedOriginalEntity ?? undefined,
              onChange: setInternalFormValue,
              onCreate: handleEntityCreated,
              onUpdate: handleEntityUpdated,
              fields,
            })}
        </CardContent>
      </Card>
      <Card>
        <CardHeader title={`Список`} />
        <CardContent>
          {renderEntitiesList({
            entities,
            onEntitySelect: handleEntitySelected,
          })}
        </CardContent>
      </Card>
    </List>
  );
};
