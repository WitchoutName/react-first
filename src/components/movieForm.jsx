import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "./../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id === "new") return;

    const movie = getMovie(id);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: { ...movie, genre: movie.genre.name } });
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .label("Number in Stosk")
      .min(0)
      .max(1000),
    dailyRentalRate: Joi.number()
      .required()
      .label("Daily Rental Rate")
      .min(0)
      .max(10),
  };

  doSubmit = () => {
    const genre = getGenres().filter(
      (g) => g.name === this.state.data.genre
    )[0];
    const movie = {
      ...this.state.data,
      genreId: genre._id,
    };
    saveMovie(movie);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>New movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect(
            "genre",
            "Genre",
            getGenres().map((g) => g.name)
          )}
          {this.renderInput("numberInStock", "Number in Stosk", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Add")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
