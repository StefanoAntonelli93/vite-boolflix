<script>
// importo appfilm
import AppFilm from './components/AppFilm.vue'
// importo store
import { store } from './store';
// importo axios
import axios from 'axios';

export default {
  name: "AppBoolflix",
  components: {
    AppFilm,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    // creo funzione per chiamata api
    getFilm() {
      axios.get(this.store.apiUrl, {
        // aggiungo parametri di ricerca
        params: {
          api_key: '415477f3fde7b23ef241d1d552d9ae84',
          query: 'spiderman',
        }
      }).then((response) => {
        console.log(response.data);
        console.log(this.store.results);
        // l'array results si popola dei dati api
        this.store.results = response.data;

      });
      // controllo se ci sono errori durante chiamata api
    }, catch(error) {
      console.error('Errore durante la richiesta API:', error);
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
    <AppFilm />
  </div>

</template>

<style scoped></style>
