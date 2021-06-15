import React, { FC } from "react";
import { ListItem, Props as ListItemProps } from "./ListItem";
import { TextType } from "../../themes";
import { DateTimeComponent } from "../DateTimeComponent";

interface Props extends ListItemProps {
  date?: Date;
  time?: Date;
  dateTime?: Date;
  variant?: TextType;
  color?: string;
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
        variant={variant}
        align="center"
      />
    </ListItem>
  );
};
