import { reactive } from "vue";

export const store = reactive({
  // creo array vuoto
  results: [],
  // importo qui url per chiamata api
  apiUrl: "https://api.themoviedb.org/3/search/movie",
  apiKey: "415477f3fde7b23ef241d1d552d9ae84",
});
