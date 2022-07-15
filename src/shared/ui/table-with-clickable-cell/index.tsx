import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { NoBorderTransparentButton } from "../no-border-transparent-button";

export type Column<I> = {
  id: keyof I;
  label: string;
  minWidth?: number;
  align?: "right" | "inherit" | "left" | "center" | "justify" | undefined;
  format?: (value: number) => string;
};

type Row = {
  id: string | number;
};

type Props<T extends Object> = {
  columns: Column<T>[];
  rows: (Row & T)[];
  withPagination?: boolean;
  clickableCellIndex?: number;
  onClick?: (id: string | number) => () => void;
};

function TableWithClickableCell<T>({
  columns,
  rows,
  clickableCellIndex,
  withPagination,
  onClick,
}: Props<T>) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id as string}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column, idx) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id as string}
                          align={column.align}
                        >
                          {clickableCellIndex === idx && Boolean(onClick) ? (
                            <NoBorderTransparentButton
                              onClick={onClick!(row.id)}
                            >
                              <>{value}</>
                            </NoBorderTransparentButton>
                          ) : (
                            <>{value}</>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {withPagination && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}

export default TableWithClickableCell;
