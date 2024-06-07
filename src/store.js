import { reactive } from "vue";

export const store = reactive({
  // creo array vuoto
  results: [],
  // importo qui url e key per chiamata api
  apiUrl: "https://api.themoviedb.org/3/search/movie",
  apiKey: "415477f3fde7b23ef241d1d552d9ae84",
  // imposto una lingua di default per dati api
  language: "it",
});
