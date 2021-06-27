import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  BoardOrderList,
  Props,
} from "../../components/TrelloBoard/OrderList/BoardOrderList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

export default {
  title: "BoardOrderList",
  component: BoardOrderList,
} as Meta;

const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Template: Story<Props> = (args) => {
  const [ordersOrder, setOrdersOrder] = useState<string[]>(args.ordersOrder);

  const handleDragEnd = (result: DropResult) => {
    if (
      result.destination &&
      result.destination.index !== result.source.index
    ) {
      setOrdersOrder((prev) =>
        reorder(prev, result.source.index, result.destination!.index)
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardOrderList {...args} ordersOrder={ordersOrder} />
    </DragDropContext>
  );
};

export const BoardOrderListStory = Template.bind({});
BoardOrderListStory.args = {
  orderStatus: "done",
  ordersMap: {
    order1: {
      orderId: "order1",
      status: "done",
    },
    order2: {
      orderId: "order2",
      status: "done",
    },
    order3: {
      orderId: "order3",
      status: "done",
    },
    order4: {
      orderId: "order4",
      status: "done",
    },
  },
  ordersOrder: ["order1", "order3", "order2", "order4"],
};
