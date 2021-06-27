import styled from "styled-components";

export interface Props {
  areas: string[][];
  rows: string[];
  columns: string[];
  columnGap?: number;
  rowGap?: number;
}

const buildGridColumns = (props: Props) => {
  const { columns } = props;

  return columns ? columns.join(' ') : '';
}

const buildGridRows = (props: Props) => {
  const { rows } = props;

  return rows ? rows.join(' ') : '';
}

const buildGridAreas = (props: Props) => {
  const { areas } = props;

  return areas ? areas.map(r => `"${r.join(' ')}"`).join('\n') : ''
}

const getRowsGap = (props: Props) => {
  return props.rowGap || 0;
}

const getColumnsGap = (props: Props) => {
  return props.columnGap || 0;
}

export const Grid = styled.div<Props>`
    height: 100%;
    display: grid;
    grid-template-columns: ${buildGridColumns};
    grid-template-rows: ${buildGridRows};
    grid-template-areas: ${buildGridAreas};
    grid-column-gap: ${getColumnsGap}px;
    grid-row-gap: ${getRowsGap}px;
`

interface IGridItemsProps {
  area: string;
  vertical?: 'center' | 'start' | 'end' | 'stretch';
  horizontal?: 'center' | 'start' | 'end' | 'stretch';
}

export const GridItem = styled.div<IGridItemsProps>`
    width: 100%;
    height: 100%;
    grid-area: ${(props: IGridItemsProps) => props.area};
    place-self: ${(props: IGridItemsProps) => props.vertical || 'center'} ${(props: IGridItemsProps) => props.horizontal || 'center'};
`;
