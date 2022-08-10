import { api } from "./request";

const DiscardsApi = {
  async fetchDiscards() {
    return api.get("admin/discards");
  }
};

export default DiscardsApi;
