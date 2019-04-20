import React, { Component } from "react";
import Like from "../components/common/Like";
import TableHeaders from "./common/TableHeaders";
import TableBody from "./common/TableBody";
import Table from "./common/Table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like onClick={() => this.props.onLike(movie)} liked={movie.liked} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    return (
      <>
        <Table
          movies={movies}
          onLike={onLike}
          onDelete={onDelete}
          onSort={onSort}
          sortColumn={sortColumn}
          columns={this.columns}
        />
      </>
    );
  }
}

export default MoviesTable;
