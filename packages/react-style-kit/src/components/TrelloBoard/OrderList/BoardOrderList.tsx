import { List } from "../../List";
import React, { FC } from "react";
import { Droppable } from "react-beautiful-dnd";
import { BoardOrderItem } from "./BoardOrderItem/BoardOrderItem";

export interface OrderData {
  orderId: string;
  status: string;
}

export interface OrdersMap {
  [key: string]: OrderData;
}

export interface Props {
  orderStatus: string;
  ordersOrder: string[];
  ordersMap: OrdersMap;
}

export const BoardOrderList: FC<Props> = ({ orderStatus, ordersOrder }) => {
  return (
    <Droppable droppableId={orderStatus} type="ORDER">
      {(provided) => {
        return (
          <List
            style={{ height: "500px" }}
            mode="v"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {provided.placeholder}
            {ordersOrder.map((orderId, index) => {
              return (
                <BoardOrderItem orderId={orderId} index={index} key={orderId} />
              );
            })}
          </List>
        );
      }}
    </Droppable>
  );
};
