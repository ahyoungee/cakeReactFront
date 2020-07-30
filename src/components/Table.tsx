import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
  id: 'name' | 'company' | 'category' | 'status' | 'adMethod' | 'startUse' | 'applicationDate';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: '契約氏名', minWidth: 170 },
  { id: 'company', label: '会社名', minWidth: 100 },
  {
    id: 'status',
    label: '申し込みステータス',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'category',
    label: 'サービスカテゴリ',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'adMethod',
    label: '流入経路',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'startUse',
    label: '申込日',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'applicationDate',
    label: '利用開始日',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  company: string;
  status: string;
  category: string;
  adMethod: string;
  startUse: string;
  applicationDate: string;
}

function createData(
    name: string,
    company: string,
    status: string,
    category: string,
    adMethod: string,
    startUse: string,
    applicationDate: string
): Data {
  return {     
    name,
    company,
    status,
    category,
    adMethod,
    startUse,
    applicationDate
 };
}

const rows = [
  createData('India', 'IN', '1324171354', '3287263', 'aaa', 'aaa', 'aaaa'),
  createData('China', 'CN', '1403500365', '9596961', 'bbb', 'aaab', 'baaaa'),
  createData('Italy', 'IT', '60483973', '301340', 'caaa', 'caaa', 'caaaa'),
  createData('United States', 'US', '327167434', '9833520', 'daaa', 'adaa', 'adaaa'),
];

const useStyles = makeStyles((theme:Theme) => createStyles({
  root: {
    '& .MuiPaper-root': {
        maxWidth: 800,
    }
  },
  container: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxHeight: 440
  },
}),
);

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.company}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}