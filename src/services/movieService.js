import { getGenres } from "./genreService";
import config from "../config.json";
import http from "./httpService";

function movieUrl(movie, id) {
  return `${config.apiBase}/movies/${(movie && movie._id) || id}`;
}

export async function getMovies() {
  const { data } = await http.get(`${config.apiBase}/movies`);
  return data;
}

export async function getMovie(id) {
  console.log(movieUrl(null, id), "my url");
  const { data } = await http.get(movieUrl(null, id));
  return data;
}

export async function saveMovie(movie) {
  const genres = await getGenres();
  console.log(!!movie._id);
  if (movie._id) {
    const body = {
      ...movie,
      genreId: genres.find((g) => g.name === movie.genre)._id,
    };
    delete body._id;
    delete body.genre;
    console.log(body, movie._id);
    try {
      const response = await http.put(movieUrl(movie), body);
      console.log(response, "dddddddddddd");
      return response;
    } catch (ex) {
      console.log(ex);
    }
  } else {
    try {
      const body = {
        ...movie,
        genreId: genres.find((g) => g.name === movie.genre)._id,
      };
      delete body.genre;
      console.log(body, "no id");
      const response = await http.post(`${config.apiBase}/movies`, body);
      console.log(response, "dddddddddddd");
      return response;
    } catch (ex) {
      console.log(ex);
    }
  }
}

export async function deleteMovie(id) {
  await http.delete(`${config.apiBase}/movies/${id}`);
  return;
}
