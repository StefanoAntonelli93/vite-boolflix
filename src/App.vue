<script>
// import searchfilm
import SearchFilm from './components/SearchFilm.vue';
// importo appfilm
import AppFilm from './components/AppFilm.vue';
// importo store
import { store } from './store';
// importo axios
import axios from 'axios';

export default {
  name: "AppBoolflix",
  components: {
    AppFilm,
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
            api_key: '415477f3fde7b23ef241d1d552d9ae84',
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
      }
    }
  },
  created() {
    this.getFilm();
  },


}
</script>

<template>

  <div class="container py-5">
    <h1 class="text-danger">boolflix</h1>
    <SearchFilm @search="getFilm" />
    <AppFilm />
  </div>

</template>

<style scoped></style>
