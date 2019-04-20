import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/Paginate";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleOnPageChange = page => {
    console.log("Page Changed", page);
    this.setState({ currentPage: page });
  };

  handleGenre = name => {
    console.log("Genre Clicked", name);
    this.setState({ selectedGenre: name, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre !== "All Genres"
        ? allMovies.filter(movie => movie.genre.name === selectedGenre)
        : allMovies;

    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sorted, currentPage, pageSize);

    return { data: movies, totalCount: filteredMovies.length };
  };

  render() {
    const { length: count } = this.state.movies;
    const { genres, selectedGenre, sortColumn } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data } = this.getPageData();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <ul className="list-group">
              {genres.map(genre => (
                <li
                  key={genre._id}
                  className={
                    genre.name === selectedGenre
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  onClick={() => this.handleGenre(genre.name)}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-10">
            <p>Showing {totalCount} movies in the database.</p>
            <MoviesTable
              movies={data}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={this.state.pageSize}
              onPageChange={this.handleOnPageChange}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
