import config from "../config.json";
import http from "./httpService";

const userUrl = config.apiBase + "/users";

export async function register(user) {
  return await http.post(userUrl, {
    email: user.username,
    name: user.name,
    password: user.password,
  });
}
