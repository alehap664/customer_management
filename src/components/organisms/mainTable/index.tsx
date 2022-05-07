import type { NextPage } from 'next';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import React from 'react';
import mapModifiers from '../../../utils/functions';
import clsx from 'clsx';

interface MainTableProps {
  rowData: any[];
}

type TColumnDefs = (ColDef | ColGroupDef)[] | null;

const MainTable: NextPage<MainTableProps> = ({ rowData }) => {
  const gridRef = React.useRef();

  const [columnDefs, setColumnDefs] = React.useState<TColumnDefs>(null);

  const defaultColDef = React.useMemo(
    () => ({
      sortable: true,
    }),
    [],
  );

  React.useEffect(() => {
    setColumnDefs([
      {
        headerName: 'Họ Tên',
        field: 'fullName',
        resizable: true,
        minWidth: 180,
        pinned: true,
      },
      {
        headerName: 'Số điện thoại',
        field: 'phoneNumber',
        resizable: true,
        minWidth: 140,
        pinned: true,
      },
      {
        headerName: 'Địa chỉ',
        field: 'address',
        resizable: true,
        minWidth: 140,
      },
      {
        headerName: 'Ngày tạo',
        field: 'createdAt',
        resizable: true,
        minWidth: 140,
      },
      {
        headerName: 'Ngày chỉnh sửa',
        field: 'updatedAt',
        resizable: true,
        minWidth: 140,
      },
      { headerName: 'Nguồn', field: 'from', width: 100 },
      { headerName: 'Nhu cầu', field: 'purpose', width: 100 },
      { headerName: 'Ghi chú', field: 'note', resizable: true, minWidth: 140 },
    ]);
  }, []);

  const autoGroupColumnDef: ColDef = React.useMemo(() => {
    return {
      minWidth: 200,
      headerName: 'Hihihi',
    };
  }, []);

  // Example of consuming Grid Event
  const cellClickedListener = React.useCallback((event) => {
    console.log('cellClicked', event);
  }, []);

  return (
    <div className={clsx(mapModifiers('o-mainTable'), 'ag-theme-material')}>
      <AgGridReact
        ref={gridRef} // Ref for accessing Grid's API
        rowData={rowData} // Row Data for Rows
        columnDefs={columnDefs} // Column Defs for Columns
        defaultColDef={defaultColDef} // Default Column Properties
        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        rowSelection="multiple" // Options - allows click selection of rows
        onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        rowHeight={40}
        headerHeight={40}
        autoGroupColumnDef={autoGroupColumnDef}
        suppressDragLeaveHidesColumns={true}
      />
    </div>
  );
};

export default MainTable;
