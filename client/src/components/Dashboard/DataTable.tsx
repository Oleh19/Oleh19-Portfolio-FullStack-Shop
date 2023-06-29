import { FC } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import MaterialTable from 'material-table';

interface DataTableProps {
  columns: any;
  data: any;
  title: any;
  actions: any;
}

const DataTable: FC<DataTableProps> = ({ columns, data, title, actions }) => {
  const defaultMaterialTheme = createTheme();

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        actions={actions}
      />
    </ThemeProvider>
  );
};

export default DataTable;
