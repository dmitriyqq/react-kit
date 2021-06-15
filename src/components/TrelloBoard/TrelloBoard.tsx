import React, { useState } from "react";
import { FC } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Column } from "./Column/Column";
import { List } from "../List";
import { OrderData } from "./OrderList/BoardOrderList";

interface ColumnData {
  id: string;
  label: string;
}

interface ColumnMap {
  [key: string]: ColumnData;
}

interface OrdersOrderData {
  orderStatus: string;
  ordersOrder: string[];
}

export interface Props {
  columns: ColumnMap;
  columnsOrder: string[];
  orders: OrderData[];
  ordersOrder: OrdersOrderData[];
  onColumnsOrderChange: (stringOrder: string[]) => void;
  onOrdersOrderChange: (columnId: string, ordersOrder: string[]) => void;
  onOrderStatusChange: (
    orderId: string,
    previousStatus: string,
    nextStatus: string
  ) => void;
}

const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const TrelloBoard: FC<Props> = ({
  columns,
  columnsOrder,
  ordersOrder,
  onColumnsOrderChange,
  onOrdersOrderChange,
  onOrderStatusChange,
  orders,
}) => {
  const handleDragEnd = (result: DropResult) => {
    if (result.source.droppableId === result.destination?.droppableId) {
      if (result.type === "COLUMN") {
        if (
          result.destination &&
          result.destination.index !== result.source.index
        ) {
          onColumnsOrderChange(
            reorder(columnsOrder, result.source.index, result.destination.index)
          );
        }
      } else if (result.type === "ORDER") {
        if (
          result.destination &&
          result.destination.index !== result.source.index
        ) {
          const ordersStatusOrder = ordersOrder.find(
            (o) => o.orderStatus === result.destination!.droppableId
          );
          onOrdersOrderChange(
            result.destination.droppableId,
            reorder(
              ordersStatusOrder?.ordersOrder ?? [],
              result.source.index,
              result.destination.index
            )
          );
        }
      }
    } else if (result.type === "ORDER" && result.destination?.droppableId) {
      onOrderStatusChange(
        result.draggableId,
        result.source.droppableId,
        result.destination?.droppableId
      );
    }

    console.log("drag end", result);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ padding: "5px", height: "530px" }}>
        <Droppable droppableId="board" direction="horizontal" type="COLUMN">
          {(provided) => {
            {
              return (
                <List
                  mode="h"
                  style={{ padding: "5px", height: "530px" }}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {provided.placeholder}
                  {columnsOrder.map((columnId, index) => (
                    <Column
                      id={columnId}
                      label={columns[columnId].label}
                      key={columnId}
                      index={index}
                      ordersOrder={
                        ordersOrder.find((o) => o.orderStatus === columnId)
                          ?.ordersOrder ?? []
                      }
                      orders={orders.filter((o) => o.status === columnId) ?? []}
                    />
                  ))}
                </List>
              );
            }
          }}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
