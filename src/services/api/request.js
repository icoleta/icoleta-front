import axios from "axios";

export const api = axios.create({
  baseURL: "https://icoleta-api.herokuapp.com/api",
});
