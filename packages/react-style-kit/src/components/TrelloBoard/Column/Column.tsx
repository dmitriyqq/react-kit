import React from "react";
import { FC } from "react";
import { List } from "../../List";
import { Card } from "../../Card/Card";
import { CardHeader } from "../../Card/CardHeader";
import { Draggable } from "react-beautiful-dnd";
import { BoardOrderList, OrderData } from "../OrderList/BoardOrderList";

interface Props {
  label: string;
  id: string;
  index: number;

  orders: OrderData[];
  ordersOrder: string[];
}

export const Column: FC<Props> = ({
  label,
  id,
  index,
  ordersOrder,
  orders,
}) => {
  const orderMap: Record<string, OrderData> = {};
  for (const order of orders) {
    orderMap[order.orderId] = order;
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => {
        return (
          <List
            ref={provided.innerRef}
            mode="v"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
              flex: "1 1",
              height: "500px",
            }}
          >
            <Card style={{ height: "70px" }}>
              <CardHeader title={label} />
            </Card>
            <BoardOrderList
              ordersOrder={ordersOrder}
              orderStatus={id}
              ordersMap={orderMap}
            />
          </List>
        );
      }}
    </Draggable>
  );
};
