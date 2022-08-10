import { api } from "./request";

const companyApi = {
  fetchCompanies() {
    return api.get("/company");
  },
  fetchCompany(id) {
    return api.get(`/admin/company/${id}`);
  },
  createCompany(payload) {
    return api.post("/company", payload);
  },
  verifyCompany(id, payload) {
    return api.patch(`/admin/company/${id}`, payload);
  },
};

export default companyApi;
