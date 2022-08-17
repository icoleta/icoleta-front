import { api } from "./request";

const discardApi = {
  async fetchDiscards() {
    return api.get("/admin/discards");
  },
  async fetchDiscard(id) {
    return api.get(`/admin/discards/${id}`);
  },
  async createDiscard(payload) {
    return api.post("/admin/discards", payload);
  },
  async verifyDiscard(id, payload) {
    return api.patch(`/admin/discards/${id}`, payload);
  },
};

export default discardApi;
