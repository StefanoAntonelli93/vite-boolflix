<script>
import AppFilm from './components/AppFilm.vue'
import { store } from './store';
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
    getFilm() {
      axios.get(this.store.apiUrl, {
        params: {
          api_key: '415477f3fde7b23ef241d1d552d9ae84',
          query: 'spiderman',
        }
      }).then((response) => {
        console.log(response.data);
        console.log(this.store.results);
        this.store.results = response.data;

      });
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
