import config from "../config.json";
import http from "./httpService";
import jwtDecode from "jwt-decode";

const authUrl = config.apiBase + "/auth";
const tokenKey = "token";

http.setJWT(getJWT());

export async function login(email, password) {
  const { data: jwt } = await http.post(authUrl, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJWT() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJWT,
  logout,
  getUser,
  getJWT,
};
