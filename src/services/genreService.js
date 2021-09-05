import config from "../config.json";
import http from "./httpService";

export async function getGenres() {
  const { data } = await http.get(`${config.apiBase}/genres`);
  return data;
}
