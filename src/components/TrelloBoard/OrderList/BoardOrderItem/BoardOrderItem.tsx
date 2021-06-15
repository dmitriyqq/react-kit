import { Draggable } from "react-beautiful-dnd";
import { Card } from "../../../Card/Card";
import { FC } from "react";
import React from "react";
import { CardHeader } from "../../../Card/CardHeader";

interface Props {
  orderId: string;
  index: number;
}

export const BoardOrderItem: FC<Props> = ({ orderId, index }) => {
  return (
    <Draggable draggableId={orderId} index={index}>
      {(provided) => {
        return (
          <Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardHeader title={orderId} />
          </Card>
        );
      }}
    </Draggable>
  );
};
