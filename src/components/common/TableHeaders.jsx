import React, { Component } from "react";

export default class TableHeaders extends Component {
  riseSort = path => {
    console.log("HANDLE SORT", path);
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.path = path;
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = item => {
    const { sortColumn } = this.props;

    if (item.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-angle-up" />;
    return <i className="fa fa-angle-down" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(obj => (
            <th onClick={() => this.riseSort(obj.path)}>
              {obj.label}
              {this.renderSortIcon(obj)}
            </th>
          ))}

          <th />
          <th />
        </tr>
      </thead>
    );
  }
}
