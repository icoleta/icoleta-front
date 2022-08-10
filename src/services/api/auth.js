import { api } from "./request";

const authApi = {
  async login(payload) {
    return api.post("/login", payload);
  },
};

export default authApi;
