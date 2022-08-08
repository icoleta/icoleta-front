import { api } from "./request";

const authApi = {
  login(payload) {
    return api.post("/login", payload);
  },
};

export default authApi;
