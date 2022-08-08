import { api } from "./request";

const othersApi = {
  fetchCourses() {
    return api.get("/course");
  },
  fetchSemesters() {
    return api.get("/semester");
  },
};

export default othersApi;
