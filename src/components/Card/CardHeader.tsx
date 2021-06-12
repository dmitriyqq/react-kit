import React, { FC, InputHTMLAttributes } from "react";
import { List } from "../List";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { CardContent } from "./CardContent";

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  title?: string;
}

export const CardHeader: FC<Props> = ({
  onClose,
  title,
  children,
  ...rest
}) => {
  return (
    <CardContent {...rest}>
      {
        <List
          mode="h"
          justify={
            onClose && title
              ? "space-between"
              : onClose
              ? "flex-end"
              : "flex-start"
          }
        >
          {title && (
            <Text variant="highlight" color="dark-grey">
              {title}
            </Text>
          )}
          {onClose && <Icon icon="close" onClick={onClose} />}
        </List>
      }
      {children}
    </CardContent>
  );
};
