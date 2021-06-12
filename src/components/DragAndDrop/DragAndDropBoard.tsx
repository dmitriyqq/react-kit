import { Card } from "../Card/Card";
import { CardHeader } from "../Card/CardHeader";
import { CardContent } from "../Card/CardContent";
import React, {
  createContext,
  CSSProperties,
  FC,
  forwardRef,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { DragElementWrapper, useDrag, useDragLayer, useDrop } from "react-dnd";

import { ThemeProps } from "../../themes/theme";

import { withTheme } from "styled-components";
import { getEmptyImage } from "react-dnd-html5-backend";
import { DragAndDropGrid } from "./DragAndDropGrid";
import { Container } from "./Container";

export interface Props extends ThemeProps {
  props?: string[];
}

interface BoxProps {
  name: string;
  style?: CSSProperties;
}

interface DropResult {
  name: string;
}

const DragAndDropBox: FC<BoxProps> = memo(function DragAndDropBox({ name }) {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: "box",
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      console.log("end", item, dropResult);
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult?.name}!`);
      }
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <Card ref={drag}>
      <CardHeader title={name} />
      <CardContent>{name}</CardContent>
    </Card>
  );
});

// eslint-disable-next-line react/display-name
const Box: FC<BoxProps> = memo(function Box({ name, style }) {
  return (
    <Card style={style}>
      <CardHeader title={name} />
      <CardContent>{name}</CardContent>
    </Card>
  );
});

export const DragAndDropBin = forwardRef<
  DragElementWrapper<any>,
  {
    style?: CSSProperties;
    isActive: boolean;
    canDrop: boolean;
    children: ReactNode;
  }
>(function DragAndDropBin({ children, style, isActive, canDrop }, ref) {
  // const [items, setItems] = useState<string[]>([]);

  let backgroundColor = undefined;
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div ref={ref as any} style={{ ...style, backgroundColor }}>
      {children}
      {/*<List>*/}
      {/*  {items.map((name, i) => (*/}
      {/*    <DragAndDropBox key={i} name={name} />*/}
      {/*  ))}*/}
      {/*</List>*/}
    </div>
  );
});

interface BoardContextData {
  gridHeight: number;
}

interface BoardContextMethods {
  itemDragStart?: () => void;
}

// interface BoardContext extends BoardContextData, BoardContextMethods {}

const DragAndDropBoardContext = createContext<BoardContextMethods>({});

// export const CustomPreview = ({ props }: any) => {
//   return <div {...props} style={{ ...(props.style ?? {})} w></div>;
// };

export const CustomDragLayer: FC<{ style?: CSSProperties }> = () => {
  const {
    itemType,
    isDragging,
    item,
    initialOffset,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || !currentOffset) {
    return null;
  }

  const { x, y } = currentOffset;
  const transform = `translate3d(${x}px, ${y}px, 0)`;
  return (
    <Box
      name={item.name}
      style={{
        position: "absolute",
        transform,
      }}
    />
  );
};

interface DragAndDropGridSize {
  width: number;
  height: number;
}

export const DragAndDropBoard: FC<Props> = memo(function DragAndDropBoard() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<DragAndDropGridSize>({
    width: 500,
    height: 500,
  });

  useEffect(() => {
    const listener = () => {
      const width = ref?.current?.offsetWidth ?? 500;
      const height = ref?.current?.offsetHeight ?? 500;
      console.log("resize", width, height);
      setSize({ width, height });
    };

    console.log("effect");
    setSize({
      width: ref?.current?.offsetWidth ?? 500,
      height: ref?.current?.offsetHeight ?? 500,
    });

    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item, monitor) {
        return { name: "connected" };
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    []
  );

  const isActive = canDrop && isOver;

  return (
    <DragAndDropBoardContext.Provider value={{}}>
      <div ref={ref} style={{ width: "100%", height: "100%" }}>
        {/*<CustomDragLayer*/}
        {/*  style={{*/}
        {/*    width: "100%",*/}
        {/*    height: "100%",*/}
        {/*    position: "absolute",*/}
        {/*    zIndex: 20,*/}
        {/*  }}*/}
        {/*/>*/}
        <DragAndDropBin
          ref={drop as any}
          isActive={isActive}
          canDrop={canDrop}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            zIndex: 0,
          }}
        >
          <DragAndDropBox name="TestDragAndDrop A" />
          <DragAndDropBox name="TestDragAndDrop B" />
        </DragAndDropBin>
        {canDrop && <DragAndDropGrid size={size} />}
      </div>
    </DragAndDropBoardContext.Provider>
  );
});
