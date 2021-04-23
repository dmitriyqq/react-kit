import { List } from "./List";
import { DataList, Props as DataListProps } from "./DataList";
import { Pagination } from "../Pagination";
import { FC, useState } from "react";
import React from "react";
import { ListItemData } from "../../model/ListItemData";
import { PageSizeControl } from "../PageSizeControl";
import { SelectOption } from "../Select";

export interface Props extends DataListProps {
  initialPageSize?: number;
  initialCurrentPage?: number;
  onNewData: (skip: number, take: number, page: number) => void;
  selectedId?: string;
  data: ListItemData[];
  total: number;
}

export const pageSizeOptions = new Array(5).fill(0).map(
  (e, i): SelectOption<number> => ({
    label: `${(i + 1) * 20}`,
    value: (i + 1) * 20,
    id: `${(i + 1) * 20}`,
  })
);

export const PaginatedDataList: FC<Props> = ({
  total,
  initialPageSize,
  onNewData,
  initialCurrentPage,
  isLoading,
  ...rest
}) => {
  const [pageSize, setPageSize] = useState<number>(initialPageSize ?? 20);
  const [currentPage, setCurrentPage] = useState<number>(
    initialCurrentPage ?? 1
  );

  const totalPages = Math.ceil((total ?? 1) / pageSize);

  const callNewData = (page: number, pageSize: number) => {
    onNewData((page - 1) * pageSize, pageSize, page);
  };

  const handleNextPage = () => {
    setCurrentPage((page) => {
      callNewData(page + 1, pageSize);
      return Math.max(page + 1, 1);
    });
  };
  const handlePage = (newPage: number) => {
    setCurrentPage(() => {
      callNewData(newPage, pageSize);
      return newPage;
    });
  };
  const handlePrevPage = () => {
    setCurrentPage((page) => {
      callNewData(page - 1, pageSize);
      return Math.max(page - 1, 1);
    });
  };

  const handlePageSizeChanged = (pageSize: number) => {
    setCurrentPage(1);
    setPageSize(() => {
      callNewData(currentPage, pageSize);
      return pageSize;
    });
  };

  return (
    <List mode="v">
      <PageSizeControl
        pageSize={pageSize}
        totalResults={total}
        totalPages={totalPages}
        onPageSizeChanged={handlePageSizeChanged}
        pageSizeOptions={pageSizeOptions}
      />
      <DataList {...rest} isLoading={isLoading} />
      {!isLoading && (
        <Pagination
          disabled={isLoading}
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPage={handlePage}
          onPrevPage={handlePrevPage}
        />
      )}
    </List>
  );
};
