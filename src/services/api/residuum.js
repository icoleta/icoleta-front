import { api } from "./request";

const residuumApi = {
  async fetchResiduums() {
    return api.get("/residuum");
  },
  async createResiduum(payload) {
    return api.post("admin/residuum", payload);
  },
  async editResiduum(id, payload) {
    return api.put(`admin/residuum/${id}`, payload);
  },
  async deleteResiduum(id) {
    return api.delete(`admin/residuum/${id}`);
  },
};

export default residuumApi;
