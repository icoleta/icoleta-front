import { api } from "./request";

const companyApi = {
  async fetchCompanies() {
    return api.get("/company");
  },
  async fetchCompany(id) {
    return api.get(`/admin/company/${id}`);
  },
  async createCompany(payload) {
    return api.post("/company", payload);
  },
  async verifyCompany(id, payload) {
    return api.patch(`/admin/company/${id}`, payload);
  },
};

export default companyApi;
