import React, { FC, useEffect, useRef, useState } from "react";
import { ThemeProps } from "../../themes/theme";
import {
  getHeightUnit,
  getHeightUnitNumber,
  getWidthUnit,
  getWidthUnitNumber,
} from "../../themes/helpers/size";
import { useDrop } from "react-dnd";
import { withTheme } from "styled-components";

// interface DragAndDropGridProps extends ThemeProps {}

interface DragAndDropEmptyUnitProps {
  x: number;
  y: number;
  w: string;
  h: string;
}

const DragAndDropEmptyUnit: FC<DragAndDropEmptyUnitProps> = ({
  x,
  y,
  w,
  h,
}) => {
  return (
    <div
      style={{
        width: w,
        height: h,
        gridRow: `${x} / span 1`,
        gridColumn: `${y} / span 1`,
        border: "5px dashed black",
        borderRadius: "5px",
      }}
    />
  );
};

interface Props extends ThemeProps {
  size: {
    width: number;
    height: number;
  };
}

export const DragAndDropGrid: FC<Props> = withTheme(({ theme, size }) => {
  const width = size.width || 100;
  const height = size.height || 500;

  const ref = useRef<HTMLDivElement | null>(null);

  const widthUnit = getWidthUnitNumber({ theme });
  const heightUnit = getHeightUnitNumber({ theme });

  const numberOfWidthUnits = Math.floor(width / (widthUnit + 30));
  const numberOfHeightUnits = Math.floor(height / (heightUnit + 30));

  const widthUnitPx = getWidthUnit({ theme });
  const heightUnitPx = getHeightUnit({ theme });

  const units = [];
  const templateRows = [];
  const templateColumns = [];
  for (let i = 0; i < numberOfWidthUnits; i++) {
    templateRows.push(widthUnitPx);
  }

  for (let j = 0; j < numberOfHeightUnits; j++) {
    templateColumns.push(heightUnitPx);
  }

  for (let i = 0; i < numberOfWidthUnits; i++) {
    for (let j = 0; j < numberOfHeightUnits; j++) {
      units.push({ x: i, y: j });
    }
  }
  const emptyUnits = units.map(({ x, y }, i) => (
    <DragAndDropEmptyUnit
      x={x}
      y={y}
      w={widthUnitPx}
      h={heightUnitPx}
      key={i}
    />
  ));
  console.log(
    "units",
    units,
    numberOfWidthUnits,
    numberOfHeightUnits,
    widthUnit
  );
  return (
    <div
      ref={(el) => (ref.current = el)}
      style={{
        position: "absolute",
        minHeight: "500px",
        maxHeight: "1000px",
        width: `${width}px`,
        height: `${height}px`,
        display: "grid",
        gridTemplateRows: templateRows.join(""),
        gridTemplateColumns: templateColumns.join(""),
        rowGap: "5px",
        columnGap: "5px",
        zIndex: 0,
      }}
    >
      {emptyUnits}
    </div>
  );
});
