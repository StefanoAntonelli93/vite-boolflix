import { reactive } from "vue";

export const store = reactive({
  // creo array vuoto
  film: [],
  tv: [],
  // importo qui url info per chiamata api
  apiInfo: {
    baseUrl: "https://api.themoviedb.org/3/search/",
    key: "415477f3fde7b23ef241d1d552d9ae84",
    poster: "https://image.tmdb.org/t/p/",
    sizePoster: "w342",
    language: "it",
    endpoints: {
      movie: "movie",
      tv: "tv",
    },
  },
});
