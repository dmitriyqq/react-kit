import { List } from "./List/List";
import { Button } from "./Button";
import { Text } from "./Text";
import { FC, ReactNode } from "react";
import React from "react";

export interface Props {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onPage: (pageNumber: number) => void;

  disabled?: boolean;
}

export const Pagination: FC<Props> = ({
  totalPages,
  currentPage,
  onPage,
  onNextPage,
  onPrevPage,
  disabled,
}) => {
  const handlePageSelected = (pageNumber: number) => {
    onPage(pageNumber);
  };

  const pageLinks: ReactNode[] = [];
  const addedPages: number[] = [];

  const addPage = (pageNumber: number) => {
    if (addedPages.includes(pageNumber)) {
      return;
    }

    addedPages.push(pageNumber);

    if (pageNumber === currentPage) {
      pageLinks.push(
        <Text style={{ margin: "5px" }} key={pageNumber} themeColor="primary">
          {pageNumber}
        </Text>
      );
    } else {
      pageLinks.push(
        <Text
          style={{ margin: "5px" }}
          key={pageNumber}
          onClick={disabled ? undefined : () => handlePageSelected(pageNumber)}
        >
          {pageNumber}
        </Text>
      );
    }
  };

  addPage(1);

  if (currentPage - 5 > 2) {
    pageLinks.push(<Text key="...1">...</Text>);
  }

  for (
    let i = Math.max(currentPage - 5, 1);
    i <= Math.min(currentPage + 5, totalPages);
    i++
  ) {
    addPage(i);
  }

  if (currentPage + 5 < totalPages - 1) {
    pageLinks.push(<Text key="...2">...</Text>);
  }

  addPage(totalPages);

  return (
    <List mode="v">
      <List
        mode="h"
        justify="space-around"
        align="center"
        style={{ width: "100%" }}
      >
        <Button
          icon="arrow-left-s"
          iconType="line"
          onClick={onPrevPage}
          disabled={disabled || currentPage === 1}
        />
        <List
          mode="h"
          justify="space-around"
          style={{ width: "100%" }}
          wrapItems={true}
        >
          {pageLinks}
        </List>
        <Button
          icon="arrow-right-s"
          iconType="line"
          onClick={onNextPage}
          disabled={disabled || currentPage === totalPages}
        />
      </List>
    </List>
  );
};
