import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { TrelloBoard, Props } from "../../components/TrelloBoard/TrelloBoard";

export default {
  title: "TrelloBoard",
  component: TrelloBoard,
} as Meta;

const Template: Story<Props> = (args) => {
  const [orders, setOrders] = useState(args.orders);
  const [columnsOrder, setColumnsOrder] = useState<string[]>(args.columnsOrder);
  const [ordersStatusOrder, setOrderStatusOrder] = useState(args.ordersOrder);

  const handleOrdersOrderChange = (
    orderStatus: string,
    newOrdersOrder: string[]
  ) => {
    console.log("handleOrdersOrderChange", orderStatus, newOrdersOrder);
    setOrderStatusOrder((prev) => [
      ...prev.filter((o) => o.orderStatus !== orderStatus),
      { orderStatus, ordersOrder: newOrdersOrder },
    ]);
  };

  const handleOrderStatusChange = (
    orderId: string,
    prevStatus: string,
    nextStatus: string
  ) => {
    setOrders((prev) => [
      ...prev.filter((p) => p.orderId !== orderId),
      { orderId, status: nextStatus },
    ]);

    const prevStatuses = ordersStatusOrder.find(
      (o) => o.orderStatus === prevStatus
    );
    const nextStatuses = ordersStatusOrder.find(
      (o) => o.orderStatus === nextStatus
    );

    setOrderStatusOrder((prev) => [
      ...prev.filter(
        (o) => o.orderStatus !== nextStatus && o.orderStatus !== prevStatus
      ),
      {
        orderStatus: nextStatus,
        ordersOrder: [...(nextStatuses?.ordersOrder ?? []), orderId],
      },
      {
        orderStatus: prevStatus,
        ordersOrder:
          prevStatuses?.ordersOrder?.filter((f) => f !== orderId) ?? [],
      },
    ]);
  };

  return (
    <TrelloBoard
      {...args}
      orders={orders}
      columnsOrder={columnsOrder}
      onColumnsOrderChange={setColumnsOrder}
      ordersOrder={ordersStatusOrder}
      onOrderStatusChange={handleOrderStatusChange}
      onOrdersOrderChange={handleOrdersOrderChange}
    />
  );
};

export const TrelloBoardStory = Template.bind({});
TrelloBoardStory.args = {
  columns: {
    ordered: {
      id: "ordered",
      label: "Заказано",
    },
    inProgress: {
      id: "inProgress",
      label: "В процессе",
    },
    done: {
      id: "done",
      label: "Сделано",
    },
  },
  orders: [
    { orderId: "order1", status: "ordered" },
    { orderId: "order2", status: "ordered" },
    { orderId: "order3", status: "inProgress" },
    { orderId: "order4", status: "inProgress" },
    { orderId: "order5", status: "inProgress" },
    { orderId: "order6", status: "done" },
    { orderId: "order7", status: "done" },
    { orderId: "order8", status: "done" },
  ],
  ordersOrder: [
    { orderStatus: "done", ordersOrder: ["order6", "order7", "order8"] },
    { orderStatus: "inProgress", ordersOrder: ["order3", "order4", "order5"] },
    { orderStatus: "ordered", ordersOrder: ["order1", "order2"] },
  ],
  columnsOrder: ["ordered", "inProgress", "done"],
};
