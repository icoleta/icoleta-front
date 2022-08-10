import { api } from "./request";

const authApi = {
  async login(payload) {
    return api.post("/login", payload);
  },

  async logout() {
    return api.post("/logout");
  },
};

export default authApi;
