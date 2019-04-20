import React from "react";
import TableHeaders from "./TableHeaders";
import TableBody from "./TableBody";

export default function Table({
  onSort,
  sortColumn,
  movies,
  onLike,
  onDelete,
  columns
}) {
  return (
    <table className="table">
      <TableHeaders onSort={onSort} sortColumn={sortColumn} columns={columns} />
      <TableBody
        data={movies}
        columns={columns}
        onLike={onLike}
        onDelete={onDelete}
      />
    </table>
  );
}
