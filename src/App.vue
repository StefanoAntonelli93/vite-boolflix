<script>
// import searchfilm
import SearchFilm from './components/SearchFilm.vue';


// importo store
import { store } from './store';
// importo axios
import axios from 'axios';

export default {
  name: "AppBoolflix",
  components: {
    SearchFilm,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    // Funzione per chiamata API
    getFilm(searchText = '') {
      if (searchText) {
        axios.get(this.store.apiUrl, {
          // Aggiungo parametri di ricerca
          params: {
            api_key: this.store.apiKey,
            language: this.store.language,
            query: searchText,
          }
        }).then((response) => {
          console.log(response.data);
          // L'array results si popola dei dati API
          this.store.results = response.data;
        }).catch((error) => {
          // Controllo se ci sono errori durante chiamata API
          console.error('Errore durante la richiesta API:', error);
        });
      };
    }
  },
  created() {
    this.getFilm();
  },


}
</script>

<template>

  <div class="container py-5">
    <h1 class="text-danger">Boolflix</h1>
    <SearchFilm @search="getFilm" />


  </div>

</template>

<style scoped></style>
