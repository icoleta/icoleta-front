import { api } from "./request";

const residuumApi = {
  async fetchResiduums() {
    return api.get("/residuum");
  },
  async createResiduum(payload) {
    return api.post("/residuum", payload);
  },
  async editResiduum(id, payload) {
    return api.put(`/residuum/${id}`, payload);
  },
  async deleteResiduum(id) {
    return api.delete(`admin/residuum/${id}`);
  },
};

export default residuumApi;
