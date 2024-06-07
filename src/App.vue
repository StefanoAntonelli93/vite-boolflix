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
        axios.get(this.store.apiInfo.baseUrl + this.store.apiInfo.endpoints.movie, {
          // Aggiungo parametri di ricerca
          params: {
            api_key: this.store.apiInfo.key,
            // imposto lingua italiano ai dati api
            language: this.store.apiInfo.language,
            query: searchText,
          }
        }).then((response1) => {
          console.log(response1.data.results);
          // L'array results si popola dei dati API
          this.store.film = response1.data;
          return axios.get(this.store.apiInfo.baseUrl + this.store.apiInfo.endpoints.tv, {
            // Aggiungo parametri di ricerca
            params: {
              api_key: this.store.apiInfo.key,
              // imposto lingua italiano ai dati api
              language: this.store.apiInfo.language,
              query: searchText,
            }
          }).then((response2) => {
            console.log(response2.data.results)
            this.store.tv = response2.data;
          })
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
    <!-- chiamata emit -->
    <SearchFilm @search="getFilm" />


  </div>
</template>

<style scoped></style>
