import { api } from "./request";

const pointApi = {
  async fetchPoints() {
    return api.get("/points");
  },
  async fetchPoint(id) {
    return api.get(`/point/${id}`);
  },
  async fetchCompanyPoints() {
    return api.get("/company/point");
  },
  fetchCompanyPoint(id) {
    return api.get(`/company/point/${id}`);
  },
  createPoint(payload) {
    return api.post("/company/point", payload, {
      headers:{
        'Content-Type': 'multipart/form-data'
     }
    });
  },
  editPoint(id, payload) {
    return api.put(`/company/point/${id}`, payload);
  },
  deletePoint(id) {
    return api.delete(`/company/point/${id}`);
  },
};

export default pointApi;
