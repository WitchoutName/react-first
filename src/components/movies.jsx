import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import ListFilter from "./common/listFilter.jsx";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    currentFilter: "All Genres",
    allFilter: "All Genres",
    sortColumn: { path: "title", order: "asc" },
  };

  movieState = () => (
    <h5>
      {this.state.movies.length > 0
        ? `There's ${this.state.movies.length} movies.`
        : "No movies, add some."}
    </h5>
  );

  handleDelMovie = (id) => {
    this.setState({ movies: this.state.movies.filter((m) => m._id !== id) });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleFilterChange = (filter) => {
    this.setState({ currentFilter: filter, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      currentFilter,
      allFilter,
      sortColumn,
    } = this.state;

    const filteredMovies =
      currentFilter === allFilter
        ? allMovies
        : allMovies.filter((m) => m.genre.name === currentFilter);

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sortedMovies, currentPage, pageSize);

    return { totalCount: filteredMovies.length, data: movies };
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      currentFilter,
      allFilter,
      sortColumn,
    } = this.state;

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-md-3">
          <ListFilter
            filters={genres.map((g) => g.name)}
            all={allFilter}
            onFilterChange={this.handleFilterChange}
            currentFilter={currentFilter}
          />
        </div>
        <div className="col-md-9">
          {this.movieState()}
          <MoviesTable
            movies={movies}
            onDelMovie={this.handleDelMovie}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={totalCount || allMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
