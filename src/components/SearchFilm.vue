<script>
import { store } from '../store';

export default {
    name: "SearchFilm",
    emits: ['search'],
    data() {
        return {
            store,
            searchText: '',
        };
    },
    methods: {
        emitSearch() {
            this.$emit('search', this.searchText);
        }
    },
};
</script>

<template>
    <div class="container">
        <input type="text" placeholder="Cosa vuoi guardare?" v-model="searchText" @keyup.enter="emitSearch" />
        <button @click="emitSearch">Cerca</button>
        <div v-for="(film, index) in store.results.results" :key="index">
            <p>Titolo: {{ film.title }}</p>
            <p>Titolo Originale: {{ film.original_title }}</p>
            <p>Lingua:
                <span v-if="film.original_language === 'it'">
                    <img src="/images/flags/italy.png">
                </span>
                <span v-else-if="film.original_language === 'en'">
                    <img src="/images/flags/united-kingdom.png">
                </span>
                <span v-else-if="film.original_language === 'us'">
                    <img src="/images/flags/united-states.png">
                </span>
                <span v-else>
                    {{ film.original_language }}
                </span>
            </p>
            <p>Media Voto: {{ film.vote_average }}</p>
            <p>Trama: {{ film.overview }}</p>
            <hr>
        </div>
    </div>
</template>



<style scoped>
img {
    width: 1rem;
}
</style>
