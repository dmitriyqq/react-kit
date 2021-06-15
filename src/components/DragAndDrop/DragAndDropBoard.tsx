import React, { useState } from "react";
import { FC } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { Card } from "../Card/Card";
import { CardHeader } from "../Card/CardHeader";
import { CardContent } from "../Card/CardContent";
import { List } from "../List";

interface Props {
  prop?: any;
}

export const MyDraggable: FC<{ name: string; index: number }> = ({
  name,
  index,
}) => (
  <Draggable draggableId={name} index={index} key={name}>
    {(provided, snapshot) => (
      <Card
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          ...provided.draggableProps.style,
          backgroundColor: "#fcfcfc",
        }}
      >
        <CardHeader title={name} />
        <CardContent>
          <h4>{name}</h4>
        </CardContent>
      </Card>
    )}
  </Draggable>
);

interface DroppableProps {
  droppableOrder: string[];
  droppableMap: DroppableMap;
}

export const MyDroppable: FC<DroppableProps> = ({ droppableOrder }) => (
  <Droppable droppableId="myTestBox">
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        style={{
          width: "1000px",
          height: "1000px",
          border: "5px dashed grey",
          borderRadius: "20px",
          backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
        }}
        {...provided.droppableProps}
      >
        <h2>I am a droppable!</h2>
        {provided.placeholder}
        <List mode="v" style={{ width: "100%", height: "100%" }}>
          {droppableOrder.map((droppableId, index) => {
            return (
              <MyDraggable key={droppableId} name={droppableId} index={index} />
            );
          })}
        </List>
      </div>
    )}
  </Droppable>
);

interface DroppableData {
  id: string;
}

interface DroppableMap {
  [key: string]: DroppableData;
}

const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const DragAndDropBoard: FC<Props> = () => {
  const [droppableOrder, setDroppableOrder] = useState([
    "droppable 1",
    "droppable 2",
    "droppable 3",
  ]);
  const [droppables, _] = useState<DroppableMap>({
    "droppable 1": {
      id: "droppable 1",
    },
    "droppable 2": {
      id: "droppable 2",
    },
    "droppable 3": {
      id: "droppable 3",
    },
  });
  const handleDragEnd = (result: DropResult) => {
    console.log("drag end", result);
    if (
      result.destination?.index &&
      result.destination?.index !== result.source.index
    ) {
      setDroppableOrder((prev) =>
        reorder(prev, result.source.index, result.destination!.index)
      );
      // const sourceIndex = result.source.index;
      // const sourceDraggble = droppableOrder[sourceIndex];
      // const destinationIndex = result.destination.index;
      // const destinationDraggble = droppableOrder[destinationIndex];
      //
      // setDroppableOrder((prev) => {
      //   const first = [
      //     ...prev.filter(
      //       (d, i) =>
      //         i < destinationIndex &&
      //         d !== sourceDraggble &&
      //         d !== destinationDraggble
      //     ),
      //   ];
      //
      //   const secondary = [
      //     ...prev.filter(
      //       (d, i) =>
      //         i > destinationIndex &&
      //         d !== sourceDraggble &&
      //         d !== destinationDraggble
      //     ),
      //   ];
      //
      //   if (destinationIndex !== droppableOrder.length - 1) {
      //     return [...first, sourceDraggble, destinationDraggble, ...secondary];
      //   } else {
      //     return [...first, destinationDraggble, sourceDraggble];
      //   }
      //   // console.log("firstHalf", first);
      //   // console.log("source", sourceDraggble);
      //   // console.log("lastHalf", secondary);
      // });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <MyDroppable droppableOrder={droppableOrder} droppableMap={droppables} />
    </DragDropContext>
  );
};
