import { api } from "./request";

const discardApi = {
  async fetchDiscards() {
    return api.get("admin/discards");
  },
  async fetchDiscard(id) {
    return api.get(`/discards/${id}`);
  },
  async createDiscard(payload) {
    return api.post("/discards", payload);
  },
  async verifyDiscard(id, payload) {
    return api.patch(`/discards/${id}`, payload);
  },
};

export default discardApi;
