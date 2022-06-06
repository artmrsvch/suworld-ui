import styled from 'styled-components';
import React from "react";
import AntdTable, {TableProps} from 'antd/lib/table/index';
import { md, xs,Color } from '../ui';
import { Breakpoint } from 'antd/lib/_util/responsiveObserve';

const StyledTable = styled(AntdTable)`
  table {
    border-spacing: 0 10px;
    color: ${Color.strongBlue};
    @media screen and (max-width: ${xs}) {
      width: 100%;
    }

    .ant-checkbox-checked .ant-checkbox-inner {
      border-color: ${Color.sapphire};
      background-color: ${Color.sapphire};
    }
    .ant-checkbox-inner {
      border-color: #e5e5e5;
      border-radius: 4px;
      width: 20px;
      height: 20px;
    }
    .ant-checkbox-wrapper-checked .ant-checkbox-inner:after {
      width: 11px;
      height: 6px;
      top: 0;
      left: 42%;

      transform: scale(1) rotate(315deg) translateX(-50%);
      border: 2px solid ${Color.white};
      border-top: 0;
      border-right: 0;
    }
  }
  .ant-table-tbody > tr.ant-table-row-selected > td {
    background: ${Color.smoGrey};
    border: 1px solid ${Color.sapphire}!important;
    border-left: none !important;
    border-right: none !important;
    :first-child {
      border-left: 1px solid ${Color.sapphire}!important;
    }
    :last-child {
      border-right: 1px solid ${Color.sapphire}!important;
    }
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: ${Color.smoGrey};
  }

  thead {
    border-spacing: 0 !important;
    @media screen and (max-width: ${md}) {
      .ant-table-selection-column {
        text-align: start;
        color: ${Color.strongBlue}!important;
      }
      .ant-table-selection {
        flex-direction: row;
        .ant-checkbox-wrapper {
          margin-right: 10px;
        }
      }
    }
  }
  tbody {
    tr {
      border-spacing: 0 !important;
      border-radius: 4px;
      background-color: #f0f7ff;
      td {
        border-bottom: none;
      }
      td:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      td:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
  .ant-table-thead > tr > th {
    background-color: white;
    border-bottom: none;
    padding-bottom: 5px;
    font-weight: 400;
    font-size: 14px;
    color: ${Color.lightGray};
  }
  .ant-table-tbody > tr.ant-table-row-selected:hover > td {
    @media screen and (max-width: ${xs}) {
      border: 1px solid ${Color.sapphire};
    }
  }
`;

const isNotSm = (responsive: any[]) =>
  responsive && !responsive.some((r: any) => r === 'sm');

const setResponsiveProperty = (col: any[]) =>
  col.map(i => ({
    ...i,
    responsive: isNotSm(i.responsive)
      ? ([...i.responsive, 'sm'] as Breakpoint[])
      : (['sm'] as Breakpoint[]),
  }));

export const Table: React.FC<TableProps<any>> = props => {
  // hide all columns in sm (576px) breakpoint
  const wrappedColumns = props.columns
    ? setResponsiveProperty(props.columns)
    : props.columns;

  return <StyledTable {...props} columns={wrappedColumns} />;
};
