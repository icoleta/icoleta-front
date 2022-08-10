import { api } from "./request";

const personApi = {
  async createUser(payload) {
    return api.post("/person", payload);
  },
  async fetchUsers() {
    return api.get("/admin/person");
  },
  async makeVolunteer(id, payload) {
    return api.patch(`/admin/person/${id}`, payload);
  },
};

export default personApi;
