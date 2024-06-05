import { reactive } from "vue";

export const store = reactive({
  results: [],
  apiUrl: "https://api.themoviedb.org/3/search/movie",
});
