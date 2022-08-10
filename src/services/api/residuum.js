import { api } from "./request";

const residuumApi = {
  fetchResiduums() {
    return api.get("/admin/residuum");
  },
  createResiduum(payload) {
    return api.post("/admin/residuum", payload);
  },
  editResiduum(id, payload) {
    return api.put(`/admin/residuum/${id}`, payload);
  },
  deleteResiduum(id) {
    return api.delete(`/admin/residuum/${id}`);
  },
};

export default residuumApi;
