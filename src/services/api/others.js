import { api } from "./request";

const othersApi = {
  async fetchCourses() {
    return api.get("/course");
  },
  async fetchSemesters() {
    return api.get("/semester");
  },
  async fetchRankingByDiscardCount() {
    return api.get('/ranking');
  },
  async fetchRankingByWeightDiscarded() {
    return api.get('/ranking?category=weight');
  },
};

export default othersApi;
