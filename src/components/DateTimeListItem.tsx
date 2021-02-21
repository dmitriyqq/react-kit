import React, { FC } from "react";
import { ListItem, Props as ListItemProps } from "./ListItem";
import { TextColor } from "./Text";
import { TextType } from "../themes/theme";
import { DateTimeComponent } from "./DateTimeComponent";

interface Props extends ListItemProps {
  date?: Date;
  time?: Date;
  dateTime?: Date;
  variant?: TextType;
  color?: TextColor;
}

export const DateTimeListItem: FC<Props> = ({
  date,
  time,
  dateTime,
  variant,
  color,
  ...rest
}) => {
  return (
    <ListItem {...rest}>
      <DateTimeComponent
        date={date}
        time={time}
        dateTime={dateTime}
        color={color}
        theme={rest.theme}
        align="center"
      />
    </ListItem>
  );
};
