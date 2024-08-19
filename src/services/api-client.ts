import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a0278abf1af34a7a97f6d338552c0dd0",
  },
});
