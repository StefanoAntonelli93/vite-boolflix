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

        <!-- FILM -->
        <div v-for="(film, index) in store.film.results" :key="index">
            <p>Titolo: {{ film.title }}</p>
            <p>Titolo Originale: {{ film.original_title }}</p>
            <p>Lingua:
                <span v-if="film.original_language === 'it'">
                    <img src="/images/flags/italy.png">
                </span>
                <span v-else-if="film.original_language === 'en'">
                    <img src="/images/flags/united-kingdom.png">
                    <img src="/images/flags/united-states.png">
                </span>
                <span v-else-if="film.original_language === 'ja'">
                    <img src="/images/flags/japan.png">

                </span>
                <span v-else>
                    {{ film.original_language }}
                </span>
            </p>
            <p>Media Voto: {{ film.vote_average }}</p>
            <p>Trama: {{ film.overview }}</p>
            <hr>
        </div>

        <!-- SERIE TV  -->
        <div v-for="(tv, index) in store.tv.results" :key="index">
            <p>Titolo: {{ tv.name }}</p>
            <p>Titolo Originale: {{ tv.original_name }}</p>
            <p>Lingua:
                <span v-if="tv.original_language === 'it'">
                    <img src="/images/flags/italy.png">
                </span>
                <span v-else-if="tv.original_language === 'en'">
                    <img src="/images/flags/united-kingdom.png">
                    <img src="/images/flags/united-states.png">
                </span>
                <span v-else-if="film.original_language === 'ja'">
                    <img src="/images/flags/japan.png">

                </span>
                <span v-else>
                    {{ tv.original_language }}
                </span>
            </p>
            <p>Media Voto: {{ tv.vote_average }}</p>
            <p>Trama: {{ tv.overview }}</p>
            <hr>
        </div>
    </div>
</template>



<style scoped>
img {
    width: 1rem;
    margin-right: 5px;
}
</style>
