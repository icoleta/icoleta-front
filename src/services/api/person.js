import { api } from "./request";

const personApi = {
  createUser(payload) {
    return api.post("/person", payload);
  },
  fetchUsers() {
    return api.get("/admin/person");
  },
  makeVolunteer(id, payload) {
    return api.patch(`/admin/person/${id}`, payload);
  },
};

export default personApi;
