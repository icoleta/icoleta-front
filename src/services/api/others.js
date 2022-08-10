import { api } from "./request";

const othersApi = {
  async fetchCourses() {
    return api.get("/course");
  },
  async fetchSemesters() {
    return api.get("/semester");
  },
};

export default othersApi;
