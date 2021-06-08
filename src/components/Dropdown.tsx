import React, { FC, useEffect, useState } from "react";
import { SelectOption } from "./Select";
import { Card } from "./Card/Card";
import { List } from "./List";
import { Button } from "./Button";
import { ThemeProps } from "../themes/theme";
import { withTheme } from "styled-components";

export interface Props extends ThemeProps {
  options?: SelectOption<any>;
}

export const Dropdown: FC<Props> = withTheme(({ theme }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [width, setWidth] = useState(200);
  const [positionLeft, setPositionLeft] = useState(0);
  const [positionTop, setPositionTop] = useState(0);
  const dropdownButton = React.useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    setWidth(dropdownButton.current?.offsetWidth ?? 200);
    setPositionLeft(dropdownButton.current?.offsetLeft ?? 0);
    setPositionTop(dropdownButton.current?.offsetTop ?? 0);
  }, []);

  return (
    <div className="dropdown">
      <Button
        ref={dropdownButton}
        onClick={() => setOpen((prev) => !prev)}
        style={{ display: "block", width: "500px" }}
      >
        Dropdown
      </Button>
      <Card
        style={{
          display: open ? "inline-block" : "none",
          width: `${width}px`,
          position: "absolute",
          left: positionLeft,
          top: positionTop + (theme?.heightUnit ?? 0),
        }}
      >
        <List>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </List>
      </Card>
    </div>
  );
});
