import { api } from "./request";

const pointApi = {
  async fetchPoints() {
    return api.get("/point");
  },
  async fetchCompanyPoints() {
    return api.get("/company/point");
  },
  fetchCompanyPoint(id) {
    return api.get(`/company/point/${id}`);
  },
  createPoint(payload) {
    return api.post("/company/point", payload);
  },
  editPoint(id, payload) {
    return api.put(`/company/point/${id}`, payload);
  },
  deletePoint(id) {
    return api.delete(`/company/point/${id}`);
  },
};

export default pointApi;
